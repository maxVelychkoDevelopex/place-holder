(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', ['$scope', '$location', '$stateParams', 'apiService', userCtrl]);

    function userCtrl($scope, $location, $stateParams, apiService) {
      $scope.userId = $stateParams.userId;

      $scope.$on('updateUserData', function(event, data) {
        $scope.user = data;
      });

      loadUsers();


      function loadUsers() {
        apiService.loadUsers($scope.userId)
          .success(function(data) {
            $scope.user = data;
          })
          .error(function() {
            $location.path('/users/');
          })
      }
    }
})();
