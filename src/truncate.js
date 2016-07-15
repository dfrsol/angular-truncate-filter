(function(){
    'use strict';

    angular.module('truncate', []);

    var truncateFilter = function(){
        return function(string, numberOfCharacters, wordBreak, customEllipsis){
            if (validateStringAndLength(string, numberOfCharacters)) {
                return string;
            }

            var truncatedString = string.substr(0, numberOfCharacters);

            if (wordBreak) {
                var lastSpace = truncatedString.lastIndexOf(' ');

                if (lastSpace !== -1) {
                    truncatedString = truncatedString.substr(0, lastSpace);
                }
            }

            return truncatedString + (customEllipsis || '...');

        };

        function validateStringAndLength (string, numberOfCharacters) {
            return (!string && typeof string !== 'string' &&
                parseInt(numberOfCharacters, 10) && string.length <= numberOfCharacters);
        }
    };

    angular.module('truncate')
        .filter('truncate', truncateFilter);

}());