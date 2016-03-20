(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('apiService', ['$rootScope', '$http', 'localStorageService', apiService]);

    function apiService($rootScope, $http, localStorageService) {
        // console.log('apiService');
        
        var root = 'http://jsonplaceholder.typicode.com';

        return {
            loadUsers: loadUsers,
            saveUser: saveUser,
            deleteUser: deleteUser,
            loadPosts: loadPosts
        };


        function loadUsers() {
            return $http.get(root + '/users/');
        }

        function saveUser(data) {
          $http.put(root + '/users/' + data.id, data)
            .then(function(data) {
              $rootScope.$broadcast('updateUserData', data.data);
            })
        }

        function deleteUser(userId) {
          return $http.delete(root + '/users/' + userId);
        }

        function loadPosts() {
            return $http.get(root + '/posts/');
        }

    }
})();
