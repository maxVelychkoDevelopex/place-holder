(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('editUserPosts', editUserPosts);

    function editUserPosts() {
      return {
        restrict: 'E',
        templateUrl: 'templates/directives/edit-user-posts.html',
        link: link
      }


      function link(scope) {
          scope.button = 'show posts';
          scope.userPostsTable = false;
          scope.editUserPosts = editUserPosts;


          function editUserPosts() {
          scope.userPostsTable = !scope.userPostsTable;

          if(scope.userPostsTable) {
            scope.button = 'hide posts';
          } else {
            scope.button = 'show posts';
          }
        }


      }
    }
})();
