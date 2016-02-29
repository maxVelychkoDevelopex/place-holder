(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('editUser', editUser);

    function editUser() {
      return {
        restrict: 'E',
        scope: {
          userData: "@"
        },
        templateUrl: 'templates/directives/edit-user.html',
        link: link
      }

      function link(scope) {
        scope.userFormData = false;
        scope.editUserData = function() {
          scope.userFormData = !scope.userFormData;
        };
      }
    }
})();
