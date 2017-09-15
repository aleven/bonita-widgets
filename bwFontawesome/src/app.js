(function () {
  'use strict';

  var app = angular.module('simulator', []);

  app.service('bonitaPropertiesSim', function () {
      var properties = this;
      properties.icon = "fa-camera-retro fa-spin fa-3x fa-fw";
      properties.size = "fa-3x";
      properties.spin = false;
      return properties;
  });

  app.controller('BonitaWidgetCtrl', ['$scope', 'bonitaPropertiesSim', function ($scope, properties) {
      var icon = "";
      if (properties.icon) {
          icon = icon + properties.icon;
      }
      if (properties.spin) {
          icon = icon + "fa-spin fa-fw";
      }
      if (properties.size) {
          icon = icon + properties.size;
      }
      $scope.icon = icon;
  }]);

})();
