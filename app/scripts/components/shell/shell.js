'use strict';

app.component(
    'shell', {
        templateUrl: 'views/shell.html',
        controllerAs: 'shell',
        controller: function ($state,$scope) {
      var self = this;
      self.$onInit = function() {

      };


    $(window).resize(footerPosition);
    // $scope.currState = $state;
    // $scope.$watch('currState.current.name', function(newValue, oldValue) {
    //
    //     console.log(newValue);
    // });

  }
    }
);
