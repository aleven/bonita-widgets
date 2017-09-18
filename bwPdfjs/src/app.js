(function () {
  'use strict';

  var app = angular.module('simulator', ['pdfjsViewer']);

  app.service('bonitaPropertiesSim', function () {
      var properties = this;
      properties.src = "http://www.sanface.com/pdf/test.pdf";
      properties.data = "";
      properties.scale = "";
      return properties;
  });

  app.controller('BonitaWidgetCtrl', ['$scope', 'bonitaPropertiesSim', '$sce', function ($scope, bonitaPropertiesSim, $sce) {
      $scope.properties = bonitaPropertiesSim;
      /* CONTROLLER SOURCE */

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl($scope.properties.src);
    }

  }]);

})();
