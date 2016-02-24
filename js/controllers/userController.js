(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', ['$scope', '$routeParams', 'apiService', userCtrl]);

    function userCtrl($scope, $routeParams, apiService) {
      $scope.user = null;
      $scope.userId = $routeParams.userId;

      loadUsers();


      function loadUsers() {
        apiService.loadUsers($scope.userId)
          .success(function(data) {
            $scope.user = data;
          })
      }

    }
})();
