angular.module('app', ['gridshore.c3js.chart', 'googlechart']);

angular.module('app')
  .controller('c3chartController',function ($scope) {
    $scope.tickFunc = function (d) {
      var timeAry=['10:00','10:30','11:00','12:00','12:30','13:00'];
      console.log(timeAry[d]);

      return timeAry[d];
    };
  });

angular.module('app').controller("GenericChartCtrl", function ($scope) {


  $scope.chartObject1 = {
    "type": "LineChart",
    "displayed": false,
    "data": {
      "cols": [
        {
          "id": "month",
          "label": "Month",
          "type": "string",
          "p": {}
        },
        {
          "id": "laptop-id",
          "label": "最高気温",
          "type": "number",
          "p": {}
        },
        {
          "id": "desktop-id",
          "label": "平均気温",
          "type": "number",
          "p": {}
        },
        {
          "id": "server-id",
          "label": "最低気温",
          "type": "number",
          "p": {}
        }
      ],
      "rows": [
        {
          "c": [
            {
              "v": "11:00"
            },
            {
              "v": 19
            },
            {
              "v": 17
            },
            {
              "v": 14
            }
          ]
        },
        {
          "c": [
            {
              "v": "11:30"
            },
            {
              "v": 22
            },
            {
              "v": 16
            },
            {
              "v": 12
            }
          ]
        },
        {
          "c": [
            {
              "v": "12:00"
            },
            {
              "v": 24
            },
            {
              "v": 22
            },
            {
              "v": 20
            }
          ]
        }
      ]
    },
    "options": {
      "title": "本日の気温",
      "pointSize": 5,
      //"isStacked": "true",
      "fill": 20,
      "displayExactValues": true,
      "vAxis": {
        "gridlines": {
          "count": 10
        }
      },
      "hAxis": {
        "title": "時間"
      }
    },
    "formatters": {}
  };
  //
  $scope.chartObject2 = {
    "type": "AreaChart",
    "displayed": false,
    "data": {
      "cols": [
        {
          "id": "month",
          "label": "Month",
          "type": "string",
          "p": {}
        },
        {
          "id": "laptop-id",
          "label": "本日",
          "type": "number",
          "p": {}
        },
        {
          "id": "desktop-id",
          "label": "先年同月",
          "type": "number",
          "p": {}
        }
      ],
      "rows": [
        {
          "c": [
            {
              "v": "11:00"
            },
            {
              "v": 190
            },
            {
              "v": 120
            }
          ]
        },
        {
          "c": [
            {
              "v": "11:30"
            },
            {
              "v": 200
            },
            {
              "v": 250
            }
          ]
        },
        {
          "c": [
            {
              "v": "12:00"
            },
            {
              "v": "270"
            },
            {
              "v": "300"
            }
          ]
        }
      ]
    },
    "options": {
      "title": "ガス1F",
      "pointSize": 5,
      //"isStacked": "true",
      "fill": 20,
      "displayExactValues": true,
      "vAxis": {
        "gridlines": {
          "count": 10
        }
      },
      "hAxis": {
        "title": "時間"
      },
      "colors": ["#0070d2", "gray"]
    },
    "formatters": {}
  }
});