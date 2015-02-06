(function () {
    'use strict';
    angular
        .module('patternizeApp')
        .config([
            '$routeProvider',
            AppRoutes
        ]);

    function AppRoutes ($routeProvider) {
        $routeProvider
            .when('/patterns', {
                controller: 'PatternsController',
                controllerAs: 'patternsCtrl',
                templateUrl: 'patterns/patterns.html'
            })
            .otherwise({
                redirectTo: '/patterns'
            });
    }
}());