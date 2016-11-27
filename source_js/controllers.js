var mp4Controllers = angular.module('mp4Controllers', []);


mp4Controllers.constructor('HouseDetailView', ['$scope', '$window', '$routeParams', 'HousesGateway', function($scope, $window, rp, HousesGateway){
  var id = rp.id;
  HousesGateway.getOne(id).success(function(data){
    $scope.house = data.data;
    console.log($scope.house);
  });
}]);

mp4Controllers.constructor('UserDetailView', ['$scope', '$window', '$routeParams', 'UsersGateway', function($scope, $window, rp, UsersGateway){
  var id = rp.id;
  UsersGateway.getOne(id).success(function(data){
    $scope.user = data.data;
    console.log($scope.user);
  });
}]);