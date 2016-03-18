(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', ['$scope', 'resolvedUser', userCtrl]);

    function userCtrl($scope, resolvedUser, $location, apiService) {
      var self = this;
      this.userId = null;
      this.user = resolvedUser;

      $scope.$on('updateUserData', function(event, data) {
        self.user = angular.extend(data);
      });
    }
})();
