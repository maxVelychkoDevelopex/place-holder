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

        scope.$watch('user', function(newVal, oldVal) {
          if(newVal) {
            scope.userData = angular.copy(newVal);
          }
        });

        scope.editUserData = function() {
          scope.userFormData = !scope.userFormData;

          if(scope.userFormData) {
            scope.button = 'hide';
            return;
          }
          scope.button = 'edit';
        };

        scope.saveUserData = function() {
          apiService.saveUser(scope.userId, scope.userData);
        }
      }
    }
})();
