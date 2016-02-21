(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('mainCtrl', ['$scope', '$element', 'apiService', mainCtrl]);

    function mainCtrl($scope, $element, apiService) {
        $scope.displayUsers = false;
        $scope.userFormEdit = false;
        $scope.currentUserEdit = null;
        $scope.users = null;

        $scope.makeUserFormEditable = makeUserFormEditable;
        $scope.getCurrentUserEditable = getCurrentUserEditable;
        $scope.showUsers = function() {
            $scope.displayUsers = !$scope.displayUsers;
            makeUserFormEditable(false);
        };

        loadUsers();


        function makeUserFormEditable(param) {
            $scope.userFormEdit = param;
        }

        function getCurrentUserEditable(user) {
            $scope.currentUserEdit = user;
        }

        function loadUsers() {
            apiService.loadUsers()
                .success(function(data) {
                    $scope.users = data;
                })
        }
    }
})();