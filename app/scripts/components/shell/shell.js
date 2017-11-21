'use strict';

app.component(
    'shell', {
        templateUrl: 'views/shell.html',
        controllerAs: 'shell',
        controller: function ($state,$scope) {
      var self = this;
      self.$onInit = function() {

      };

    // $scope.currState = $state;
    // $scope.$watch('currState.current.name', function(newValue, oldValue) {
    //
    //     console.log(newValue);
    // });

  }
    }
);
