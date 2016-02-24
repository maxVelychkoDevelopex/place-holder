(function () {
    'use strict';

    angular
        .module('myApp')
        .service('apiService', ['$http', apiService]);

    function apiService($http) {
        var root = 'http://jsonplaceholder.typicode.com';

        return {
            loadUsers: loadUsers,
            deleteUser: deleteUser
        };


        function loadUsers(userId) {
          if(userId) {
            return $http.get(root + '/users/' + userId);
          } else {
            return $http.get(root + '/users/');
          }
        }

        function deleteUser(userId) {
            return $http.delete(root + '/users/' + userId);
        }
    }
})();
