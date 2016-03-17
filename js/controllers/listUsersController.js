(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('listUsersCtrl', ['$scope', 'apiService', listUsersCtrl]);

    function listUsersCtrl($scope, apiService) {
        $scope.users = null;
        $scope.showHideButtons = showHideButtons;
        $scope.deleteUser = deleteUser;


        loadUsers();


        function showHideButtons(userId) {
          for(var i=0; i<$scope.users.length; i++) {
            if($scope.users[i].id == userId) {
              $scope.users[i].visible = !$scope.users[i].visible;
              break;
            }
          }
        }

        function deleteUser(user) {
          apiService.deleteUser(user.id)
            .then(function(data) {
              $scope.users.forEach(function(item,index,arr) {
                if(item.id == user.id) {
                  arr.splice(index, 1);
                }
              });
            });
        }

        function loadUsers() {
          apiService.loadUsers()
            .then(function(data) {
              $scope.users = data.data;
              $scope.users.forEach(function(item) {
                item.visible = false;
              })
            })
        }
    }
})();
