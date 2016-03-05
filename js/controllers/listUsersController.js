(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('listUsersCtrl', ['$scope', 'apiService', listUsersCtrl]);

    function listUsersCtrl($scope, apiService) {
        $scope.users = null;
        $scope.visibleButtons = false;
        $scope.showButtons = showButtons;
        $scope.hideButtons = hideButtons;
        $scope.deleteUser = deleteUser;


        loadUsers();


        function showButtons(param) {
          $scope.visibleButtons = true;
        }

        function hideButtons() {
          $scope.visibleButtons = false;
        }

        function deleteUser(user) {
          apiService.deleteUser(user.id)
            .success(function(data) {
              $scope.users = $scope.users.map(function(item) {
                if(item.id == user.id) {
                  delete $scope.users[item];
                  return;
                }
                return item;
              });
            })
        }

        function loadUsers() {
          apiService.loadUsers()
            .success(function(data) {
              $scope.users = data;
            })
        }
    }
})();
