(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('mainCtrl', ['$scope', 'apiService', mainCtrl]);

    function mainCtrl($scope, apiService) {
        $scope.displayUsers = false;
        $scope.users = undefined;

        loadUsers();

        $scope.showUsers = function() {
            $scope.displayUsers = !$scope.displayUsers;
        };

        function loadUsers() {
            apiService.loadUsers()
                .success(function(data) {
                    $scope.users = data;
                })
        }
    }
})();