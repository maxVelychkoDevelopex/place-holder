(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('editUser', ['apiService', editUser]);

    function editUser(apiService) {
      return {
        restrict: 'E',
        templateUrl: 'templates/directives/edit-user.html',
        link: link
      }

      function link(scope) {
        scope.button = 'edit';
        scope.userFormData = false;
        scope.user = angular.copy(scope.listUser.user);

        scope.editUserData = function() {
          scope.userFormData = !scope.userFormData;

          if(scope.userFormData) {
            scope.button = 'hide';
            return;
          }
          scope.button = 'edit';
        };

        scope.saveUserData = function() {
          apiService.saveUser(scope.user);
        }
      }
    }
})();
