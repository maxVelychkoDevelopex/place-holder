(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('editUser', ['apiService', editUser]);

    function editUser(apiService) {
        return {
            restrict: 'E',
            templateUrl: 'editUser.html',
            link: link
        };

        function link(scope) {

            scope.editUser = function (user) {
                scope.makeUserFormEditable(true);
                scope.getCurrentUserEditable(user);       
            };

        }
    }
})();