(function() {
    'use strict';

    angular
      .module('myApp', ['ui.router', 'LocalStorageModule'])
      .config(function($stateProvider, $urlRouterProvider) {
          // console.log('config');
        $stateProvider
          .state('users', {
            url: '/users/',
            templateUrl: 'templates/routeTemplates/list-users-template.html',
            controller: 'listUsersCtrl as listUsers',
            resolve: {
              resolvedUsers: function(apiStorage) {
                  return apiStorage.getUsersData();
              },
                resolvedPosts: function (apiStorage) {
                    return apiStorage.getPostsData();
                }
            }
          })
          .state('userId', {
            url: '/users/:userId',
            templateUrl: 'templates/routeTemplates/user-template.html',
            controller: 'userCtrl as listUser',
            resolve: {
              resolvedUser: function(apiStorage, $stateParams) {
                return apiStorage.getUsersData($stateParams.userId);
              },
                resolvedUserPosts: function (apiStorage, $stateParams) {
                    return apiStorage.getPostsData($stateParams.userId);
                }
            }
          });

          $urlRouterProvider.otherwise("/users/");
    });
})();
