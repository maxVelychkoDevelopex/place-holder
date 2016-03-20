(function() {
    'use strict';

    angular
        .module('myApp')
        .filter('numberEnd', numberEnd);

    function numberEnd() {
        return function (number) {
            if(isNaN(number) || number < 1) {
                return number;
            } else {
                var lastDigit = number % 10;
                if (lastDigit == 0) {
                    return number + 'ty';
                } else if(lastDigit == 1) {
                    return number + 'st';
                } else if (lastDigit == 2) {
                    return number + 'sd';
                } else if (lastDigit == 3) {
                    return number + 'rd';
                } else if (lastDigit > 3) {
                    return number + 'th';
                }
            }
        }

    }
})();
