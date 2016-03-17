(function() {
    'use strict';

    angular
      .module('myApp', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('users', {
            url: '/users/',
            templateUrl: 'templates/routeTemplates/list-users-template.html',
            controller: 'listUsersCtrl as listUsers',
            resolve: {
              resolvedUsers: function(apiService) {
                return apiService.loadUsers()
                  .then(function(data) {
                    data.data.forEach(function(item) {
                      item.visible = false;
                    });
                    return data;
                  })
              }
            }
          })
          .state('userId', {
            url: '/users/:userId',
            templateUrl: 'templates/routeTemplates/user-template.html',
            controller: 'userCtrl as listUser',
            resolve: {
              resolvedUser: function(apiService, $stateParams) {
                return apiService.loadUsers($stateParams.userId);
              }
            }
          });

          $urlRouterProvider.otherwise("/users/");
    });
})();
