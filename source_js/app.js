var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services', '720kb.datepicker']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/houses', {
    templateUrl: 'partials/houses.html',
    controller: 'housesController'
  }).
    when('/housedetails/:houseID',{
    	templateUrl: 'partials/house_details.html',
    	controler:'houseDetailsController'
    }).
  otherwise({
    redirectTo: '/houses'
  });
}]);
