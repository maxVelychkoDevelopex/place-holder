(function () {
    'use strict';

    angular
        .module('myApp')
        .service('apiService', ['$http', apiService]);

    function apiService($http) {
        var root = 'http://jsonplaceholder.typicode.com';

        return {
            loadUsers: loadUsers
        };


        function loadUsers() {
            return $http.get(root + /users/);
        }
    }
})();