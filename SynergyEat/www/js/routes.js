angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.mainPage', {
    url: '/home',
    views: {
      'tab2': {
        templateUrl: 'templates/mainPage.html',
        controller: 'mainPageCtrl'
      }
    }
  })

  .state('tabsController.restaurant1', {
    url: '/r1',
    views: {
      'tab2': {
        templateUrl: 'templates/restaurant1.html',
        controller: 'restaurant1Ctrl'
      }
    }
  })

  .state('tabsController.restaurant2', {
    url: '/r2',
    views: {
      'tab2': {
        templateUrl: 'templates/restaurant2.html',
        controller: 'restaurant2Ctrl'
      }
    }
  })

  .state('tabsController.restaurant3', {
    url: '/r3',
    views: {
      'tab2': {
        templateUrl: 'templates/restaurant3.html',
        controller: 'restaurant3Ctrl'
      }
    }
  })

  .state('tabsController.cart', {
    url: '/cart',
    views: {
      'tab4': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')

  

});