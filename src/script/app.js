angular.module('app', ['gridshore.c3js.chart']);

angular.module('app')
  .controller('c3chartController',function ($scope) {
    $scope.tickFunc = function (d) {
      var timeAry=['10:00','10:30','11:00','12:00','12:30','13:00'];
      return timeAry[d];
    };
  });