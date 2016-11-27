var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/firstview', {
    templateUrl: 'partials/firstview.html',
    controller: 'FirstController'
  }).
      //todo
  when('/houses/:id', {
    templateUrl: '',
    controller: 'TaskController'
  }).
  otherwise({
    redirectTo: '/settings'
  });
}]);
