(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('listUsersCtrl', ['$scope', 'resolvedUsers', 'apiService', 'localStorageService', listUsersCtrl]);

    function listUsersCtrl($scope, resolvedUsers, apiService, localStorageService) {
        var self = this;
        this.users = resolvedUsers;
        this.showHideButtons = showHideButtons;
        this.deleteUser = deleteUser;


        function showHideButtons(userId) {
          for(var i=0; i<this.users.length; i++) {
            if(this.users[i].id == userId) {
              this.users[i].visible = !this.users[i].visible;
              break;
            }
          }
        }

        function deleteUser(user) {
          apiService.deleteUser(user.id)
            .then(function(data) {
              self.users.forEach(function(item,index,arr) {
                if(item.id == user.id) {
                  arr.splice(index, 1);
                }
              });
            });
        }
    }
})();
