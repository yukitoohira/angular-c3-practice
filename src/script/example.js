angular.module('app')
  .directive('appExample', function () {
    return {
      restrict: 'E',
      controller: function () {
      },
      controllerAs: 'example',
      templateUrl: 'example.html',
      scope: {}
    }
  });