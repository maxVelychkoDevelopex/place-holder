(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('editUser', ['apiService', editUser]);

    function editUser(apiService) {
        // console.log('directive editUser');

      return {
        restrict: 'E',
        scope: {
          'userData': '@'
        },
        templateUrl: 'templates/directives/edit-user.html',
        link: link
      }

      function link(scope) {
          // console.log('link directive editUser');

          scope.button = 'show user';
        scope.userFormData = false;
        scope.user = JSON.parse(scope.userData);
        scope.editUserData = editUserData;
        scope.saveUserData = saveUserData;


        function editUserData() {
          scope.userFormData = !scope.userFormData;

          if(scope.userFormData) {
            scope.button = 'hide user';
          } else {
            scope.button = 'show user';
          }
        };

        function saveUserData() {
          apiService.saveUser(scope.user);
        }
      }
    }
})();
