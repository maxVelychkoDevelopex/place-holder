(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('apiStorage', ['localStorageService', 'apiService', apiStorage]);

    function apiStorage(localStorageService, apiService) {

        return {
            getUsersData: getUsersData
        };


        function getUsersData(userId) {
          var users = null;
          /* if storage doesn't contain users, then make request */
          if(localStorageService.get('users')) {
            if(userId) {
              return getCurrentUser();
            }
            return localStorageService.get('users');
          } else {
            users = apiService.loadUsers()
              .then(function(data) {
                data.data.forEach(function(item) {
                  item.visible = false;
                });
                localStorageService.set('users', data.data);
                return data.data;
              });

            if(userId) {
              return getCurrentUser();
            }
            return users;
          }


          function getCurrentUser() {
            var user = null;
            var users = null;
            for(var i=0; i<=localStorageService.get('users').length; i++) {
              if(localStorageService.get('users')[i].id == userId) {
                user = localStorageService.get('users')[i];
                return user;
              }
            }
          }
        }

    }
})();
