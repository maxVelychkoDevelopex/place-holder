(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('listUsersCtrl', ['resolvedUsers', 'apiService', listUsersCtrl]);

    function listUsersCtrl(resolvedUsers, apiService) {
        var self = this;
        this.users = resolvedUsers;
        this.showHideButtons = showHideButtons;
        this.deleteUser = deleteUser;


        function showHideButtons(userId) {
          for(var i=0; i<self.users.length; i++) {
            if(self.users[i].id == userId) {
                self.users[i].visible = !self.users[i].visible;
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
