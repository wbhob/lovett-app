IonicModule
.directive('ionTabs', [
'$ionicTabsDelegate',
'$ionicConfig',
'$ionicHistory',
function($ionicTabsDelegate, $ionicConfig, $ionicHistory) {
return {
restrict: 'E',
scope: true,
controller: '$ionicTabs',
compile: function(tElement) {
//We cannot use regular transclude here because it breaks element.data()
//inheritance on compile
var innerElement = jqLite('<div class="tab-nav tabs">');
innerElement.append(tElement.contents());
tElement.append(innerElement)
.addClass('tabs-' + $ionicConfig.tabs.position() + ' tabs-' + $ionicConfig.tabs.style());
return { pre: prelink, post: postLink };
function prelink($scope, $element, $attr, tabsCtrl) {
var deregisterInstance = $ionicTabsDelegate._registerInstance(
tabsCtrl, $attr.delegateHandle, tabsCtrl.hasActiveScope
);
tabsCtrl.$scope = $scope;
tabsCtrl.$element = $element;
tabsCtrl.$tabsElement = jqLite($element[0].querySelector('.tabs'));
$scope.$watch(function() { return $element[0].className; }, function(value) {
var isTabsTop = value.indexOf('tabs-top') !== -1;
var isHidden = value.indexOf('tabs-item-hide') !== -1;
$scope.$hasTabs = !isTabsTop && !isHidden;
$scope.$hasTabsTop = isTabsTop && !isHidden;
$scope.$emit('$ionicTabs.top', $scope.$hasTabsTop);
});
function emitLifecycleEvent(ev, data) {
ev.stopPropagation();
var previousSelectedTab = tabsCtrl.previousSelectedTab();
if (previousSelectedTab) {
previousSelectedTab.$broadcast(ev.name.replace('NavView', 'Tabs'), data);
}
}
$scope.$on('$ionicNavView.beforeLeave', emitLifecycleEvent);
$scope.$on('$ionicNavView.afterLeave', emitLifecycleEvent);
$scope.$on('$ionicNavView.leave', emitLifecycleEvent);
$scope.$on('$destroy', function() {
// variable to inform child tabs that they're all being blown away
// used so that while destorying an individual tab, each one
// doesn't select the next tab as the active one, which causes unnecessary
// loading of tab views when each will eventually all go away anyway
$scope.$tabsDestroy = true;
deregisterInstance();
tabsCtrl.$tabsElement = tabsCtrl.$element = tabsCtrl.$scope = innerElement = null;
delete $scope.$hasTabs;
delete $scope.$hasTabsTop;
});
}
function postLink($scope, $element, $attr, tabsCtrl) {
if (!tabsCtrl.selectedTab()) {
// all the tabs have been added
// but one hasn't been selected yet
tabsCtrl.select(0);
}
}
}
};
}]);