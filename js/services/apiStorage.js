(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('apiStorage', ['localStorageService', 'apiService', apiStorage]);

    function apiStorage(localStorageService, apiService) {

        return {
            getUsersData: getUsersData
        };


        function getUsersData(userId) {
            var users = localStorageService.get('users');

            if(users) {
                if(userId) {
                    return getCurrentUser(users);
                } else {
                    return users;
                }
            } else {
                return apiService.loadUsers()
                    .then(function(data) {
                        data.data.forEach(function(item) {
                            item.visible = false;
                        });
                        localStorageService.set('users', data.data);

                        if(userId) {
                            return getCurrentUser(localStorageService.get('users'));
                        } else {
                            return data.data;
                        }
                    });
            }


            function getCurrentUser(users) {
                for(var i=0; i<=users.length; i++) {
                    if(users[i].id == userId) {
                        return users[i];
                    }
                }
            }


        }
    }
})();
