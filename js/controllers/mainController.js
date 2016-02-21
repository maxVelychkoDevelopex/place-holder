(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('mainCtrl', ['$scope', '$element', 'apiService', mainCtrl]);

    function mainCtrl($scope, $element, apiService) {
        $scope.displayUsers = false;
        $scope.userEditability = true;
        $scope.users = null;
        $scope.userEdited = null;

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