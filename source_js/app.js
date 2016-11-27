var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services', '720kb.datepicker']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
<<<<<<< HEAD
    when('/firstview', {
    templateUrl: 'partials/firstview.html',
    controller: 'FirstController'
  }).
      //todo
  when('/houses/:id', {
    templateUrl: '',
    controller: 'TaskController'
=======
    when('/houses', {
    templateUrl: 'partials/houses.html',
    controller: 'housesController'
>>>>>>> 33f51a1b378e7fb9633af06cae5746a78fcba9d1
  }).
    when('/housedetails/:houseID',{
    	templateUrl: 'partials/house_details.html',
    	controler:'houseDetailsController'
    }).
  otherwise({
    redirectTo: '/houses'
  });
}]);
