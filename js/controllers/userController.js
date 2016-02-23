(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', ['$scope', '$routeParams', userCtrl]);

    function userCtrl($scope, $routeParams) {
        $scope.userId = $routeParams.userId;
    }
})();