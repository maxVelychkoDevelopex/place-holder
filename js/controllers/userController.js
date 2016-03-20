(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('userCtrl', ['$scope', 'resolvedUser', 'resolvedUserPosts', userCtrl]);

    function userCtrl($scope, resolvedUser, resolvedUserPosts) {
        // console.log('controller userCtrl');
        
        var self = this;
        this.userId = null;
        this.user = resolvedUser;
        this.userPosts = resolvedUserPosts;

        $scope.$on('updateUserData', function(event, data) {
            self.user = angular.extend(data);
        });
    }
})();
