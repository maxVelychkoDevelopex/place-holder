(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', ['$scope', '$location', '$routeParams', 'apiService', userCtrl]);

    function userCtrl($scope, $location, $routeParams, apiService) {
      $scope.userId = $routeParams.userId;

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
