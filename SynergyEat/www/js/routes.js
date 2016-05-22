angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  .state('tabsController', {
    url: '/tabsController',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.restaurant', {
    url: '/restaurant',
    views: {
      'restaurant': {
        templateUrl: 'templates/restaurant.html',
        controller: 'restaurantCtrl'
      }
    }
  })

  .state('tabsController.restaurant1', {
    url: '/r1',
    views: {
      'restaurant': {
        templateUrl: 'templates/restaurant1.html',
        controller: 'restaurant1Ctrl'
      }
    }
  })

  .state('tabsController.restaurant2', {
    url: '/r2',
    views: {
      'restaurant': {
        templateUrl: 'templates/restaurant2.html',
        controller: 'restaurant2Ctrl'
      }
    }
  })

  .state('tabsController.restaurant3', {
    url: '/r3',
    views: {
      'restaurant': {
        templateUrl: 'templates/restaurant3.html',
        controller: 'restaurant3Ctrl'
      }
    }
  })

  .state('tabsController.order', {
    url: '/order',
    views: {
      'order': {
        templateUrl: 'templates/order.html',
        controller: 'orderCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/tabsController/restaurant')

  

});