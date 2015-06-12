(function(){
    'use strict';

    angular.module('truncate', []);

    var truncateFilter = function(){
        return function(string, numberOfCharacters, wordBreak, customEllipsis){

            if (!string) return string;
            if (typeof string !== 'string') return string;

            numberOfCharacters = parseInt(numberOfCharacters, 10);
            if (!numberOfCharacters) return string;
            if (string.length <= numberOfCharacters) return string;

            string = string.substr(0, numberOfCharacters);

            if (wordBreak) {
                var lastSpace = string.lastIndexOf(' ');

                if (lastSpace !== -1) {
                    string = string.substr(0, lastSpace);
                }
            }

            return string + (customEllipsis || '...');

        };
    };

    angular.module('truncate')
        .filter('truncate', truncateFilter);

}());