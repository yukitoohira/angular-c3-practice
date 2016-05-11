angular.module('app', ['gridshore.c3js.chart']);

angular.module('app')
  .controller('c3chartController', function ($scope) {
    $scope.chartCallbk = function (chartObj) {
      var dataAry = chartObj.data.values('本日');
      var idx = dataAry.findIndex(function (elem, index) {
        return elem === Math.max.apply(null, dataAry);
      });

      angular.element(angular.element('#chart1 .c3-circles-本日 > circle')[idx]).css('fill', 'red');
      for (var i = 1; i < 4; i++) {
        decorateChart(i, resolveColor(idx, i));

      }
      console.log('callback called!');
    };

    function decorateChart(idx, color) {
      angular.element(angular.element('#chart1 .c3-circles-本日 > circle')[idx]).css('fill', 'white');
      angular.element(angular.element('#chart1 .c3-circles-本日 > circle')[idx]).css('stroke', color);
      angular.element(angular.element('#chart1 .c3-circles-本日 > circle')[idx]).css('stroke-width', '2px');
      angular.element(angular.element('#chart1 .c3-circles-本日 > circle')[idx]).css('stroke-dasharray', 2);
    }

    function resolveColor(maxIdx, targetIdx) {
      return maxIdx === targetIdx ? 'red' : '#0070d2';
    }

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

    $scope.maxKion = (function () {
      var result = [];
      for (var i = 0; i < 47; i++) {
        if (20 < i && i < 30) {
          result[i] = "null";
          continue;
        }
        result[i] = Math.round(Math.random() * 10 + 20);
      }
      return result.join();
    })();

    $scope.aveKion = (function () {
      var result = [];
      for (var i = 0; i < 47; i++) {
        result[i] = Math.round(Math.random() * 6 + 13);
      }
      return result.join();
    })();


    $scope.minKion = (function () {
      var result = [];
      for (var i = 0; i < 47; i++) {
        result[i] = Math.round(Math.random() * 8 + 5);
      }
      return result.join();
    })();

    function mockData() {
      var result = [];
      for (var i = 0; i < 47; i++) {
        if (20 < i && i < 30) {
          result[i] = "null";
          continue;
        }
        if (35 < i && i < 40) {
          result[i] = 0;
          continue;
        }
        result[i] = Math.round(Math.random() * 100 + 50);
      }
      return result.join();
    }
  });