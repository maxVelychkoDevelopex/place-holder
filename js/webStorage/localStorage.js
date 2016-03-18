(function() {
    'use strict';

    angular
      .module('myApp')
        .config(function (localStorageServiceProvider) {
          localStorageServiceProvider
            .setPrefix('myApp')
            .setStorageType('localStorage')
            .setNotify(true, true)
        });
})();
