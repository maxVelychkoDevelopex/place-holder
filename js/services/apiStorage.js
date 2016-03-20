(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('apiStorage', ['localStorageService', 'apiService', apiStorage]);

    function apiStorage(localStorageService, apiService) {
        // console.log('apiStorage');

        return {
            getUsersData: getUsersData,
            getPostsData: getPostsData
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
                            return getCurrentUser(data.data);
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
        
        function getPostsData(userId) {
            var posts = localStorageService.get('posts');

            if(posts) {
                if(userId) {
                    return getCurrentPosts(posts);
                } else {
                    return posts;
                }
            } else {
                return apiService.loadPosts()
                    .then(function (data) {
                        localStorageService.set('posts', data.data);
                        if(userId) {
                            return getCurrentPosts(data.data);
                        } else {
                            return data.data;
                        }
                    })
            }


            function getCurrentPosts(posts) {
                return posts.filter(function (item) {
                    if(item.userId == userId) {
                        return item;
                    }
                });
            }
        }
    }
})();
