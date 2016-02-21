(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('deleteUser', ['apiService', deleteUser]);

    function deleteUser(apiService) {
        return {
            restrict: 'E',
            templateUrl: 'deleteUser.html',
            link: link
        };

        function link(scope) {

            scope.deleteUser = function(userId) {                
                apiService.deleteUser(userId);
                
                scope.users.forEach(function (user, index, data) {
                    if(user.id == userId) {
                        data.splice(index, 1);
                    }
                });

                scope.makeUserFormEditable(false);  
            };
        }
    }
})();