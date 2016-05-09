angular.module('app', ['gridshore.c3js.chart']);

angular.module('app')
  .controller('c3chartController', function ($scope) {
    $scope.tickFunc = function (d) {
      var timeAry = ['0:00', '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30',
        '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00',
        '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
        '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
      return timeAry[d];
    };
    $scope.titleFunc = function (x) {
      return '';
    };

    $scope.nameFunc = function (name, ratio, id, index) {
      return name;
    };

    $scope.valueFunc = function (value, ratio, id, index) {
      "use strict";
      return value;
    };

    $scope.yesterdayData = mockData();

    $scope.todayData = mockData();

    function mockData() {
      var result = [];
      for (var i = 0; i < 47; i++) {
        result[i] = Math.round(Math.random() * 100 + 50);
      }
      console.log(result.join());
      return result.join();
    }
  });