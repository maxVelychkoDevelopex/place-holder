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


        function loadUsers() {
            return $http.get(root + '/users/');
        }

        function deleteUser(userId) {
            return $http.delete(root + '/users/' + userId);
        }
    }
})();