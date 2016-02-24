(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('listUsersCtrl', ['$scope', 'apiService', listUsersCtrl]);

    function listUsersCtrl($scope, apiService) {
        $scope.users = null;

        loadUsers();


        function loadUsers() {
          apiService.loadUsers()
            .success(function(data) {
              $scope.users = data;
            })
        }

    }
})();
