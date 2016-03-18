(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('editUserPosts', ['apiService', editUserPosts]);

    function editUserPosts(apiService) {
      return {
        restrict: 'E',
        scope: {
          'userData': '@'
        },
        templateUrl: 'templates/directives/edit-user-posts.html',
        link: link
      }

      function link(scope) {
        scope.button = 'show posts';
        scope.userPostsTable = false;
        scope.userPosts = null;
        scope.user = angular.copy(JSON.parse(scope.userData));
        scope.editUserPosts = editUserPosts;

        loadPosts();


        function editUserPosts() {
          scope.userPostsTable = !scope.userPostsTable;

          if(scope.userPostsTable) {
            scope.button = 'hide posts';
          } else {
            scope.button = 'show posts';
          }
        }

        function loadPosts() {
          apiService.loadPosts(scope.user.id)
            .then(function(data) {
              scope.userPosts = data.data;
            })
        }


      }
    }
})();
