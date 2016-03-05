(function() {
    'use strict';

    angular
      .module('myApp', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('users', {
            url: '/users/',
            templateUrl: 'templates/routeTemplates/list-users-template.html',
            controller: 'listUsersCtrl'
          })
          .state('userId', {
            url: '/users/:userId',
            templateUrl: 'templates/routeTemplates/user-template.html',
            controller: 'userCtrl'
          });

          $urlRouterProvider.otherwise("/users/");
    });
})();
