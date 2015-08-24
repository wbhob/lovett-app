angular.module('starter.controllers', ['ionic', 'ionic.utils', 'ngCordova', 'ti-segmented-control', 'app.services', 'ionic.wizard', 'localStorage'])
	.controller('AppCtrl', function($timeout, $cordovaNetwork, $cordovaVibration, $cordovaBarcodeScanner, $ionicSlideBoxDelegate, $cordovaPush, $rootScope, $cordovaAdMob, $ionicSlideBoxDelegate, $scope, $ionicPopup, $ionicActionSheet, $cordovaCamera, $cordovaFile, $state, $cordovaStatusbar, $ionicModal, $ionicPlatform, $ionicUser, $ionicPush, $localStorage, $ionicLoading) {
		$scope.fontChange = function() {
				console.log("set font" + $scope.user.font)
				var font = $scope.user.font;
				$localStorage.setObject("user", {
					font: font
				})
				console.log("Locally set font: " + $localStorage.getObject("user").font)
				switch (font) {
					case 'Roboto':
						angular.element('.body').css("font-family", "Roboto");
						angular.element('h1').css("font-family", "Roboto", 'important');
						angular.element('.font').attr('style', "font-family:'Roboto' !important");
						angular.element('h2').css("font-family", "Roboto");
						angular.element('h3').css("font-family", "Roboto");
						angular.element('h4').css("font-family", "Roboto");
						angular.element('h5').css("font-family", "Roboto");
						angular.element('.back-button').css("font-family", "Roboto");
						angular.element('.button').css("font-family", "Roboto");
						angular.element('input').css("font-family", "Roboto", 'important');
						$scope.user.font = "Roboto";
						break;
					case 'Raleway':
						angular.element('.body').css("font-family", "Raleway");
						angular.element('h1').css("font-family", "Raleway", 'important');
						angular.element('.font').attr('style', "font-family:'Raleway' !important");
						angular.element('h2').css("font-family", "Raleway");
						angular.element('h3').css("font-family", "Raleway");
						angular.element('h4').css("font-family", "Raleway");
						angular.element('h5').css("font-family", "Raleway");
						angular.element('.back-button').css("font-family", "Raleway");
						angular.element('.button').css("font-family", "Raleway");
						angular.element('input').css("font-family", "Raleway", 'important');
						$scope.user.font = "Raleway";
						break;
					case 'Comic Neue':
						angular.element('.body').css("font-family", "Comic Neue");
						angular.element('h1').css("font-family", "Comic Neue", 'important');
						angular.element('.font').attr('style', "font-family:'Comic Neue' !important");
						angular.element('h2').css("font-family", "Comic Neue");
						angular.element('h3').css("font-family", "Comic Neue");
						angular.element('h4').css("font-family", "Comic Neue");
						angular.element('h5').css("font-family", "Comic Neue");
						angular.element('.back-button').css("font-family", "Comic Neue");
						angular.element('.button').css("font-family", "Comic Neue");
						angular.element('input').css("font-family", "Comic Neue", 'important');
						$localStorage.setObject("user", {
							font: "Comic Neue"
						})
						$scope.user.font = "Comic Neue";
						break;
					case 'Open Sans':
						angular.element('.body').css("font-family", "Open Sans");
						angular.element('h1').css("font-family", "Open Sans", 'important');
						angular.element('.font').attr('style', "font-family:'Open Sans' !important");
						angular.element('h2').css("font-family", "Open Sans");
						angular.element('h3').css("font-family", "Open Sans");
						angular.element('h4').css("font-family", "Open Sans");
						angular.element('h5').css("font-family", "Open Sans");
						angular.element('.back-button').css("font-family", "Open Sans");
						angular.element('.button').css("font-family", "Open Sans");
						angular.element('input').css("font-family", "Open Sans", 'important');
						$scope.user.font = "Open Sans";
						break;
					case 'Lato':
						angular.element('.body').css("font-family", "Lato");
						angular.element('h1').css("font-family", "Lato", 'important');
						angular.element('.font').attr('style', "font-family:'Lato' !important");
						angular.element('h2').css("font-family", "Lato");
						angular.element('h3').css("font-family", "Lato");
						angular.element('h4').css("font-family", "Lato");
						angular.element('h5').css("font-family", "Lato");
						angular.element('.back-button').css("font-family", "Lato");
						angular.element('.button').css("font-family", "Lato");
						angular.element('input').css("font-family", "Lato", 'important');
						$scope.user.font = "Lato";
						break;
					case 'Helvetica':
						angular.element('.body').css("font-family", "Helvetica");
						angular.element('h1').css("font-family", "Helvetica", 'important');
						angular.element('.font').attr('style', "font-family:'Helvetica' !important");
						angular.element('h2').css("font-family", "Helvetica");
						angular.element('h3').css("font-family", "Helvetica");
						angular.element('h4').css("font-family", "Helvetica");
						angular.element('h5').css("font-family", "Helvetica");
						angular.element('.back-button').css("font-family", "Helvetica");
						angular.element('.button').css("font-family", "Helvetica");
						angular.element('input').css("font-family", "Helvetica", 'important');
						$scope.user.font = "Helvetica";
						break;
					case undefined:
						angular.element('.body').css("font-family", "Open Sans");
						angular.element('h1').css("font-family", "Open Sans", 'important');
						angular.element('.font').attr('style', "font-family:'Open Sans' !important");
						angular.element('h2').css("font-family", "Open Sans");
						angular.element('h3').css("font-family", "Open Sans");
						angular.element('h4').css("font-family", "Open Sans");
						angular.element('h5').css("font-family", "Open Sans");
						angular.element('.back-button').css("font-family", "Open Sans");
						angular.element('.button').css("font-family", "Open Sans");
						angular.element('input').css("font-family", "Open Sans", 'important');
						$scope.user.font = "Open Sans";
						break;
					default:
						angular.element('.body').css("font-family", "Open Sans");
						angular.element('h1').css("font-family", "Open Sans", 'important');
						angular.element('.font').attr('style', "font-family:'Open Sans' !important");
						angular.element('h2').css("font-family", "Open Sans");
						angular.element('h3').css("font-family", "Open Sans");
						angular.element('h4').css("font-family", "Open Sans");
						angular.element('h5').css("font-family", "Open Sans");
						angular.element('.back-button').css("font-family", "Open Sans");
						angular.element('.button').css("font-family", "Open Sans");
						angular.element('input').css("font-family", "Open Sans", 'important');
						$scope.user.font = "Open Sans";
				}
			}
			/*$ionicModal.fromTemplateUrl('templates/network-modal.html', function(modal) {
				$scope.networkModal = modal;
			}, {
				// Use our scope for the scope of the modal to keep it simple
				scope: $scope,
				// The animation we want to use for the modal entrance
				animation: 'slide-in-up',
				backdropClickToClose: false
			});
			$scope.closeNetworkModal = function() {
				$scope.networkModal.close();
				$scope.networkModal.destroy();
			}
			$scope.openNetworkModal = function() {
				$scope.networkModal.open();
			}
			$scope.retryNetworkConnection = function() {
				$ionicPlatform.ready(function() {
					if (window.Connection) {
						if (navigator.connection.type == Connection.NONE) {
							$ionicPopup.alert({
								title: "No Connection",
								content: "Connect to a network and try again in a few moments."
							})
						}
					}
				});
			}*/
		$scope.user = {};
		$scope.scanBarcode = function() {
			console.log("$scope.scan called")
			$ionicPlatform.ready(function() {
				$cordovaBarcodeScanner.scan().then(function(barcodeData) {
					console.log("Success!");
					$cordovaVibration.vibrate(200);
					$scope.user.id = barcodeData.text;
					$scope.setLocal();
				}, function(error) {
					console.log("an error occured." + error);
					$ionicPopup.alert({
						title: "An error occured...",
						template: "There may be a problem with your camera or device."
					})
				});
			})
		}
		if (window.localStorage["digital-id-enabled"] == 'true') {
			var enabled = true;
			$('#digital-id-menu-item').show();
			$scope.digitalIdToggle = {
				checked: true
			};
		} else {
			var enabled = false;
			$('#digital-id-menu-item').hide();
			$scope.digitalIdToggle = {
				checked: false
			};
		}
		$scope.buy = function() {
			if ((window.device && device.platform == "iOS") && window.storekit) {
				storekit.purchase(" 1014868099 ");
			}
		}

		$scope.restore = function() {
			if ((window.device && device.platform == "iOS") && window.storekit) {
				storekit.restore();
			}
		}
		$scope.composeEmail = function() {
			document.addEventListener('deviceready', function() {
				cordova.plugins.email.open({
					to: 'wilsonhobbs1@gmail.com',
					subject: 'Lovett App Feedback',
					body: 'Questions, Comments, Feedback, Feature Requests:',
					isHtml: true
				});
			}, false);
		}

		// Modal
		$scope.nextSlide = function() {
			$ionicSlideBoxDelegate.next();
		};
		$scope.prevSlide = function() {
			$ionicSlideBoxDelegate.previous();
		};
		$ionicModal.fromTemplateUrl('templates/slider.html', function(modal) {
			$scope.modal = modal;
			console.log(window.localStorage['setup']);
			if (window.localStorage['setup'] == 'true') {
				$scope.modal.hide();
				$scope.modal.remove();
			} else {
				$scope.openModal();
			}
		}, {
			// Use our scope for the scope of the modal to keep it simple
			scope: $scope,
			// The animation we want to use for the modal entrance
			animation: 'slide-in-up',
			backdropClickToClose: false
		});

		$scope.openModal = function() {
			console.log('Opening Modal');
			$scope.modal.show();
		};
		$scope.closeModal = function() {
			console.log('Closing Modal');
			$scope.modal.hide();
			$scope.modal.remove();
			console.log('Modal Closed');
		};

		/*$scope.identifyNewUser = function() {
			console.log('Functioncalled')
			if ($scope.digitalIdToggle.checked == true) {

				window.localStorage.setItem('digital-id-enabled', 'true');
				$('#digital-id-menu-item').show();
				var name = $('#setUpName').val();
				var id = $('#setUpId').val();
				console.log('values taken');
				var url = window.localStorage.getItem('url');
				console.log(url);
				if (id !== "" && name !== "" && url !== "") {
					window.localStorage.setItem('id', id);
					window.localStorage.setItem('name', name);
					console.log('vars set');
					$ionicUser.identify({
						user_id: $ionicUser.generateGUID(),
						name: window.localStorage.getItem('name'),
						id: window.localStorage.getItem('id'),
						image: window.localStorage.getItem('url'),
					}).then(function() {
						console.log('UserIdentified');
						$('.name').text(name);
						$('.id').text(id);
						$('.profile-img').attr('src', window.localStorage.getItem('url'));
						if (id != null) {
							console.log(id);
							JsBarcode(document.getElementById('barcode'), id);
						}
						$scope.identified = true;
						$('#identifyButton').hide();
						$('#pushNameList').hide();
						$('#identify-desc').hide();
						$scope.nextSlide();
						var user = $ionicUser.get();
						console.log('Identified user ' + user.name + '\n ID ' + user.user_id);
					})
				} else {
					if (name === "") {
						$('#setUpNameForm').addClass('input-assertive');
					}
					if (id === "") {
						$('#setUpIdForm').addClass("input-assertive");
					}
					if (url === "") {
						$('#setUpImgForm').addClass('input-assertive')
					}
					if (name !== "") {
						$('#setUpNameForm').removeClass('input-assertive');
					}
					if (id !== "") {
						$('#setUpIdForm').removeClass("input-assertive");
					}
					if (url !== "") {
						$('#setUpImgForm').removeClass('input-assertive')
					}
				}
			} else {
				$('#digital-id-menu-item').hide();
				window.localStorage.setItem('digital-id-enabled', 'false');
				$scope.nextSlide();
			}
		}*/
		$scope.identifyUser = function() {
			console.log('Ionic User: Identifying with Ionic User service');

			// Add some metadata to your user object.
			var name = $('#pushName').val()
			if (name == null) {
				name = "";
			}

			// Identify your user with the Ionic User Service
			$ionicUser.identify({
				user_id: $ionicUser.generateGUID(),
				name: name,
			}).then(function() {
				$scope.identified = true;
				console.log('Identified user ');
			});

			console.log('Identified user ');
		};
		$scope.pushRegister = function() {
			var iosConfig = {
				'badge': true,
				'sound': true,
				'alert': true,
			};
			$cordovaPush.register(iosConfig).then(function(result) {
				// Success -- send deviceToken to server, and store for future use
				console.log('result: ' + result)
				$rootScope.deviceToken = result;
				//$http.post('http://server.co/', {user: 'Bob', tokenID: result.deviceToken})
			}, function(err) {
				alert('Registration error: ' + err)
			});
			console.log('Ionic Push: Registering user');

			// Register with the Ionic Push service.  All parameters are optional.
			$ionicPush.register({ //Can pushes show an console.log on your screen?
				canSetBadge: true, //Can pushes update app icon badges?
				canPlaySound: true, //Can notifications play a sound?
				canRunActionsOnWake: true, //Can run actions outside the app,
				onNotification: function(notification) {
					// Handle new push notifications here
					// console.log(notification);
					return true;
				}
			}).then(function(result) {
				submitRegister();
				console.log('result: ' + result)
			});
		};
		var submitRegister = function() {
			console.log('Ionic Push: User registered');
			$scope.nextSlide();
		}
		$rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
			console.log("Successfully registered token " + data.token);
			console.log('Ionic Push: Got token ', data.token, data.platform);
			$scope.token = data.token;
		});
		$scope.verify = function() {
			var password = $('#passwordInput').val();
			if (password === "lions") {
				window.localStorage['setup'] = true;
				console.log(window.localStorage['setup']);
				$scope.closeModal();
				AdMob.showBanner(8);
				$scope.setLocal();
			} else {
				window.localStorage['setup'] = false;
				$('#password-input-cont').addClass('input-assertive');
			}
		}
		$scope.addImage = function() {
				// 2
				$ionicPlatform.ready(function() {
					$ionicActionSheet.show({
						cancelText: 'Cancel',
						buttons: [
							{
								text: '<i class="icon ion-camera"></i> Take Photo'
            },
							{
								text: '<i class="icon ion-image"></i> Camera Roll'
            },
    ],
						buttonClicked: function(index) {
							switch (index) {
								case 0:
									//Handle Take Photo Button
									$scope.options = {
										destinationType: Camera.DestinationType.FILE_URI,
										sourceType: Camera.PictureSourceType.CAMERA,
										allowEdit: true,
										encodingType: Camera.EncodingType.JPEG,
										popoverOptions: CameraPopoverOptions,
									};
									$scope.processImage();
									$scope.options = 0;
									$scope.setLocal();
									return true;
									break;
								case 1:
									//Handle Camera Roll Button
									$scope.options = {
										destinationType: Camera.DestinationType.FILE_URI,
										sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
										allowEdit: true,
										encodingType: Camera.EncodingType.JPEG,
										popoverOptions: CameraPopoverOptions,
									};
									$scope.processImage();
									$scope.options = 0;
									$scope.setLocal();
									return true;
									break;
								default:
									return false;
							}
						}
					})
				})
			}
			// 3
		$scope.processImage = function() {
			/*$cordovaCamera.getPicture($scope.options).then(function(imageData) {
					// 4
					console.log(imageData)
					onImageSuccess(imageData);

					function onImageSuccess(fileURI) {
						createFileEntry(fileURI);
					}

					function createFileEntry(fileURI) {
						window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
					}

					// 5
					function copyFile(fileEntry) {
						var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
						var newName = makeid() + name;

						window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
								fileEntry.copyTo(
									fileSystem2,
									newName,
									onCopySuccess,
									fail
								);
							},
							fail);
					}

					// 6
					function onCopySuccess(entry) {
						$scope.$apply(function() {
							$scope.user.image = entry.nativeURL;
						})

						console.log(entry);
					};


					function fail(error) {
						console.log("fail: " + error.code + error.message);
					}
				},
				function(err) {
					console.log(err.code + ": " + error.message);
				});*/
			$scope.user.image;

			$scope.addImage = function() {
				// 2
				var options = {
					destinationType: Camera.DestinationType.FILE_URI,
					sourceType: Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
					allowEdit: false,
					encodingType: Camera.EncodingType.JPEG,
					popoverOptions: CameraPopoverOptions,
				};

				// 3
				$cordovaCamera.getPicture(options).then(function(imageData) {

					// 4
					onImageSuccess(imageData);

					function onImageSuccess(fileURI) {
						createFileEntry(fileURI);
					}

					function createFileEntry(fileURI) {
						window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
					}

					// 5
					function copyFile(fileEntry) {
						var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
						var newName = makeid() + name;

						window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
								fileEntry.copyTo(
									fileSystem2,
									newName,
									onCopySuccess,
									fail
								);
							},
							fail);
					}

					// 6
					function onCopySuccess(entry) {
						$scope.$apply(function() {
							$scope.user.image = entry.nativeURL;
						});
					}

					function fail(error) {
						console.log("fail: " + error.code);
					}

					function makeid() {
						var text = "";
						var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

						for (var i = 0; i < 5; i++) {
							text += possible.charAt(Math.floor(Math.random() * possible.length));
						}
						return text;
					}

				}, function(err) {
					console.log(err);
				});
			}
		}
		$scope.setLocal = function() {
			var checked = $scope.user.checked;
			if (checked == true) {
				$('#digital-id-menu-item').show();
				$localStorage.setObject("user", {
					name: $scope.user.name,
					id: $scope.user.id,
					image: $scope.user.image,
					checked: $scope.user.checked
				});
				var user = $localStorage.getObject("user");
				$timeout(function() {
					$scope.$apply(function() {
						$scope.user = {
							name: user.name,
							id: user.id,
							image: user.image,
							checked: user.checked
						}
					})
				})
				console.log($scope.user.name);
				console.log(user.id)
				if (user.id) {
					angular.element("#barcode").JsBarcode(user.id, {
						format: "CODE39",
						height: 100,
						displayValue: false
					});
				}
			} else {
				$('#digital-id-menu-item').hide();
			}
		}
		var agreed;
		$scope.confirm = function() {
			console.log(agreed)
			if (agreed != true) {
				console.log('confirm called')
				var confirmPopup = $ionicPopup.confirm({
					title: '<b>License and Agreements</b>',
					template: 'Do you agree to the License and Agreements?',
					cancelText: 'Cancel',
					okText: 'Agree'
				});
				confirmPopup.then(function(res) {
					if (res) {
						$scope.nextSlide();
						agreed = true;
					} else {
						agreed = false;
						var alertPopup = $ionicPopup.alert({
							title: '<b>License and Agreements</b>',
							template: 'You must agree to use the app.'
						});
						alertPopup.then(function(res) {
							$ionicSlideBoxDelegate.$getByHandle('setUpBox').slide(3);
						});
					};
				});
			} else {
				agreed = true;
				$scope.nextSlide();
			}
		}
		$scope.slideHasChanged = function(index) {
			console.log(index);
			switch (index) {
				case 4:
					if (agreed != true) {
						$scope.confirm();
					} else {}
					break;
				case 2:
					$scope.setLocal();
					break;
			}
		}
		$scope.onLoad = function() {
			console.log("onLoad() called")
			var user = $localStorage.getObject("user");
			$timeout(function() {
				$scope.$apply(function() {
					$scope.user = {
						name: user.name,
						id: user.id,
						image: user.image,
						checked: user.checked
					}
				})
			})
			if (user.id) {
				angular.element("#barcode").JsBarcode(user.id, {
					format: "CODE39",
					height: 100,
					displayValue: false
				});
			}
			if (user.checked != false) {
				$scope.user.checked = true;
				$('#digital-id-menu-item').show();
				console.log(user.id);
			} else {
				$scope.user.checked = false;
				$scope.user.name = "";
				$scope.user.id = "";
				$('#digital-id-menu-item').hide();
			}
		};
		/*var font = user.font;
		switch (font) {
			case 'Roboto':
				angular.element('.body').css("font-family", "Roboto");
				angular.element('h1').css("font-family", "Roboto", 'important');
				angular.element('.font').attr('style', "font-family:'Roboto' !important");
				angular.element('h2').css("font-family", "Roboto");
				angular.element('h3').css("font-family", "Roboto");
				angular.element('h4').css("font-family", "Roboto");
				angular.element('h5').css("font-family", "Roboto");
				angular.element('.back-button').css("font-family", "Roboto");
				angular.element('.button').css("font-family", "Roboto");
				angular.element('input').css("font-family", "Roboto", 'important');
				$scope.user.font = "Roboto";
				break;
			case 'Open Sans':
				angular.element('.body').css("font-family", "Open Sans");
				angular.element('h1').css("font-family", "Open Sans", 'important');
				angular.element('.font').attr('style', "font-family:'Open Sans' !important");
				angular.element('h2').css("font-family", "Open Sans");
				angular.element('h3').css("font-family", "Open Sans");
				angular.element('h4').css("font-family", "Open Sans");
				angular.element('h5').css("font-family", "Open Sans");
				angular.element('.back-button').css("font-family", "Open Sans");
				angular.element('.button').css("font-family", "Open Sans");
				angular.element('input').css("font-family", "Open Sans", 'important');
				$scope.user.font = "Open Sans";
				break;
			case 'Lato':
				angular.element('.body').css("font-family", "Lato");
				angular.element('h1').css("font-family", "Lato", 'important');
				angular.element('.font').attr('style', "font-family:'Lato' !important");
				angular.element('h2').css("font-family", "Lato");
				angular.element('h3').css("font-family", "Lato");
				angular.element('h4').css("font-family", "Lato");
				angular.element('h5').css("font-family", "Lato");
				angular.element('.back-button').css("font-family", "Lato");
				angular.element('.button').css("font-family", "Lato");
				angular.element('input').css("font-family", "Lato", 'important');
				$scope.user.font = "Lato";
				break;
			case 'Comic Neue':
				angular.element('.body').css("font-family", "Comic Neue");
				angular.element('h1').css("font-family", "Comic Neue", 'important');
				angular.element('.font').attr('style', "font-family:'Comic Neue' !important");
				angular.element('h2').css("font-family", "Comic Neue");
				angular.element('h3').css("font-family", "Comic Neue");
				angular.element('h4').css("font-family", "Comic Neue");
				angular.element('h5').css("font-family", "Comic Neue");
				angular.element('.back-button').css("font-family", "Comic Neue");
				angular.element('.button').css("font-family", "Comic Neue");
				angular.element('input').css("font-family", "Comic Neue", 'important');
				$scope.user.font = "Comic Neue";
				break;
			case 'Helvetica':
				angular.element('.body').css("font-family", "Helvetica");
				angular.element('h1').css("font-family", "Helvetica", 'important');
				angular.element('.font').attr('style', "font-family:'Helvetica' !important");
				angular.element('h2').css("font-family", "Helvetica");
				angular.element('h3').css("font-family", "Helvetica");
				angular.element('h4').css("font-family", "Helvetica");
				angular.element('h5').css("font-family", "Helvetica");
				angular.element('.back-button').css("font-family", "Helvetica");
				angular.element('.button').css("font-family", "Helvetica");
				angular.element('input').css("font-family", "Helvetica", 'important');
				$scope.user.font = "Helvetica";
				break;
			case 'Raleway':
				angular.element('.body').css("font-family", "Raleway");
				angular.element('h1').css("font-family", "Raleway", 'important');
				angular.element('.font').attr('style', "font-family:'Raleway' !important");
				angular.element('h2').css("font-family", "Raleway");
				angular.element('h3').css("font-family", "Raleway");
				angular.element('h4').css("font-family", "Raleway");
				angular.element('h5').css("font-family", "Raleway");
				angular.element('.back-button').css("font-family", "Raleway");
				angular.element('.button').css("font-family", "Raleway");
				angular.element('input').css("font-family", "Raleway", 'important');
				$scope.user.font = "Raleway";
				break;
			default:
				angular.element('.body').css("font-family", "Open Sans");
				angular.element('h1').css("font-family", "Open Sans", 'important');
				angular.element('.font').attr('style', "font-family:'Open Sans' !important");
				angular.element('h2').css("font-family", "Open Sans");
				angular.element('h3').css("font-family", "Open Sans");
				angular.element('h4').css("font-family", "Open Sans");
				angular.element('h5').css("font-family", "Open Sans");
				angular.element('.back-button').css("font-family", "Open Sans");
				angular.element('.button').css("font-family", "Open Sans");
				angular.element('input').css("font-family", "Open Sans", 'important');
				$scope.user.font = "Open Sans";
		}*/
	})
	.controller('WelcomeCtrl', function($scope) {
		date = new Date();
		var hours = date.getHours();
		console.log(hours);
		if (hours >= 5 && hours <= 11) //MESSAGE FOR MORNING
			$scope.time = "Good Morning.";
		else if (hours >= 12 && hours <= 17) //MESSAGE FOR AFTERNOON
			$scope.time = 'Good Afternoon.';
		else if (hours >= 18 && hours <= 20) //MESSAGE FOR EVENING (6pm-8pm)
			$scope.time = 'Good Evening.';
		else //MESSAGE FOR NIGHT (9pm-4am)
			$scope.time = 'Good Night.';
		console.log('Control Working');
	})

//Upper School Bulletin Controller
.controller('USCtrl', function($scope, $http, $ionicLoading) {

		$scope.init = function() {
			$ionicLoading.show({
				template: 'Loading...'
			});
			$http.get("http://ajax.googleapis.com/ajax/services/feed/load", {
					params: {
						"v": "1.0",
						"q": "http://feed43.com/lovett-us-bulletin.xml"
					}
				})
				.success(function(data) {
					$ionicLoading.hide();
					$scope.entries = data.responseData.feed.entries[0].content;
					$scope.$broadcast('scroll.refreshComplete');
					angular.element('sub > i').hide();
				})
				.error(function(data) {
					$ionicLoading.hide();
					console.log("ERROR: " + data);
					$scope.entries = "<span style='color:#f66'>You may not be connected to the internet. Please check your connection and try again.</span>";
					$scope.$broadcast('scroll.refreshComplete');
				});


		}
	})
	.controller('MSCtrl', function($scope, $http, $ionicLoading) {
		$scope.init = function() {
			$ionicLoading.show({
				template: 'Loading...'
			});
			$http.get("http://ajax.googleapis.com/ajax/services/feed/load", {
					params: {
						"v": "1.0",
						"q": "http://www.lovett.org/rss.cfm?news=77"
					}
				})
				.success(function(data) {
					$ionicLoading.hide();
					$scope.entries = data.responseData.feed.entries[0].content;
					$scope.$broadcast('scroll.refreshComplete');
					angular.element('sub > i').hide();
				})
				.error(function(data) {
					$ionicLoading.hide();
					console.log("ERROR: " + data);
					$scope.entries = "<span style='color:#f66'>You may not be connected to the internet. Please check your connection and try again.</span>";
					$scope.$broadcast('scroll.refreshComplete');
				});


		}

	})
	.controller('LSCtrl', function($scope, $http, $ionicLoading) {

		$scope.init = function() {
			$ionicLoading.show({
				template: 'Loading...'
			});
			$http.get("http://www.lovett.org/rss.cfm?news=76", {
					params: {
						"v": "1.0",
						"q": "http://blog.nraboy.com/feed/"
					}
				})
				.success(function(data) {
					$ionicLoading.hide();
					$scope.entries = data.responseData.feed.entries[0].content;
					$scope.$broadcast('scroll.refreshComplete');
					angular.element('sub > i').hide();
				})
				.error(function(data) {
					$ionicLoading.hide();
					console.log("ERROR: " + data);
					$scope.entries = "<span style='color:#f66'>You may not be connected to the internet. Please check your connection and try again.</span>";
					$scope.$broadcast('scroll.refreshComplete');
				});

		}
	})
	//Lunch Controller
	.controller('LunchCtrl', function($scope, $http, $ionicLoading) {
		$ionicLoading.show({
			template: 'Loading...'
		});
		$scope.init = function() {
			$http.get("http://ajax.googleapis.com/ajax/services/feed/load", {
					params: {
						"v": "1.0",
						"q": "http://feed43.com/lovett-lunch-menu-feed.xml"
					}
				})
				.success(function(data) {
					$ionicLoading.hide();
					$scope.entries = data.responseData.feed.entries[0].content;
					$scope.$broadcast('scroll.refreshComplete');
				})
				.error(function(data) {
					$ionicLoading.hide();
					console.log("ERROR: " + data);
					$scope.entries = "<span style='color:#f66'>You may not be connected to the internet. Please check your connection and try again.</span>";
					$scope.$broadcast('scroll.refreshComplete');
				});
			angular.element('p > sub > i').hide();
		}
	})

.controller('AboutCtrl', function($scope) {
	})
	.controller('ChooseCtrl', function() {})
	.controller('DashCtrl', function($scope, $localStorage) {})

.controller('SettingsCtrl', function($scope, $cordovaCamera, $cordovaFile, $ionicActionSheet, $state) {
	})
	.controller('SlideCtrl', function($scope, $ionicSlideBoxDelegate) {
		$scope.user.checked = true;
	})
