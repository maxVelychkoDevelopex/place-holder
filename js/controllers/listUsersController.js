(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('listUsersCtrl', ['resolvedUsers', 'resolvedPosts', 'apiService', listUsersCtrl]);

    function listUsersCtrl(resolvedUsers, resolvedPosts, apiService) {
        // console.log('listUsersCtrl');
        
        var self = this;
        this.users = resolvedUsers;
        this.posts = resolvedPosts;
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
