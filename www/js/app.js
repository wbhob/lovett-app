// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.service.core', 'ionic.service.analytics', 'ngCordova', 'starter.controllers',
  'ionic.service.push'])

.run(function($ionicPlatform, $cordovaStatusbar, $ionicAnalytics, $cordovaAdMob, $cordovaPush, $rootScope) {
	$ionicPlatform.ready(function() {
		$ionicAnalytics.register();
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			//ionic.Platform.fullScreen();
			StatusBar.styleDefault();
		}
		var iosConfig = {
			'badge': true,
			'sound': true,
			'alert': true,
		};


		$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
			if (notification.alert) {
				navigator.notification.alert(notification.alert);
			}

			if (notification.sound) {
				var snd = new Media(event.sound);
				snd.play();
			}

			if (notification.badge) {
				$cordovaPush.setBadgeNumber(notification.badge).then(function(result) {
					// Success!
				}, function(err) {
					// An error occurred. Show a message to the user
				});
			}
		});

		if ((window.device && device.platform == "iOS") && window.storekit) {
			storekit.init({
				debug: true,
				ready: function() {
					storekit.load(["1014868099"], function(products, invalidIds) {
						console.log("In-app purchases are ready to go");
					});
				},
				purchase: function(transactionId, productId, receipt) {
					if (productId === 'productId1') {
						console.log("Purchased product id 1");
					}
				},
				restore: function(transactionId, productId, transactionReceipt) {
					if (productId === 'productId1') {
						console.log("Restored product id 1 purchase")
					}
				},
				error: function(errorCode, errorMessage) {
					console.log("ERROR: " + errorMessage);
				}
			});
		}
	})
})

.config(function($stateProvider, $urlRouterProvider, $ionicAppProvider) {
			$stateProvider

				.state('app', {
					url: "/app",
					abstract: true,
					templateUrl: "templates/menu.html",
					controller: 'AppCtrl'
				})
				.state('app.welcome', {
					url: "/welcome",
					views: {
						'menuContent': {
							templateUrl: "templates/welcome.html"
						}
					}
				})


			.state('app.bulletin', {
					url: "/bulletin",
					views: {
						'menuContent': {
							templateUrl: "templates/bulletin.html",
							controller: 'ChooseCtrl'
						}
					}
				})
				.state('app.lunch', {
					url: "/lunch",
					views: {
						'menuContent': {
							templateUrl: "templates/lunch.html"
						}
					}
				})
				.state('app.about', {
					url: "/about",
					views: {
						'menuContent': {
							templateUrl: "templates/about.html"
						}
					}
				})
				.state('app.upperschool', {
					url: "/upperschool",
					views: {
						'menuContent': {
							templateUrl: "templates/upperschool.html",
							controller: 'USCtrl'
						}
					}
				})
				.state('app.middleschool', {
					url: "/middleschool",
					views: {
						'menuContent': {
							templateUrl: "templates/middleschool.html",
							controller: 'MSCtrl'
						}
					}
				})
				.state('app.lowerschool', {
					url: "/lowerschool",
					views: {
						'menuContent': {
							templateUrl: "templates/lowerschool.html",
							controller: 'LSCtrl'
						}
					}
				}).state('app.digital-id', {
					url: "/digital-id",
					views: {
						'menuContent': {
							templateUrl: "templates/digital-id.html",
							controller: 'DashCtrl'
						}
					}
				}).state('app.settings', {
					url: "/settings",
					views: {
						'menuContent': {
							templateUrl: "templates/settings.html",
							controller: 'SettingsCtrl'
						}
					}
				}).state('app.digital-id-settings', {
					url: "/settings/digital-id",
					views: {
						'menuContent': {
							templateUrl: "templates/digital-id-settings.html"
						}
					}
				}).state('app.iap-settings', {
					url: "/settings/iap-settings",
					views: {
						'menuContent': {
							templateUrl: "templates/in-app-purchase-settings.html"
						}
					}
				})
				.state('app.typography-settings', {
					url: "/settings/typography-settings",
					views: {
						'menuContent': {
							templateUrl: "templates/typography-settings.html"
						}
					}
        })
					// if none of the above states are matched, use this as the fallback
					$urlRouterProvider.otherwise("/app/welcome");

					$ionicAppProvider.identify({
						app_id: '9a817ab5',
						api_key: 'ef581894f393b5ca0109017cd15355fb3ba03ea51aa53784',
						name: 'lovett',
						// Set the app to use development pushes
						dev_push: true
					});
				})
