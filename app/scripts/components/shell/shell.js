'use strict';

app.component(
    'shell', {
        templateUrl: 'views/shell.html',
        controllerAs: 'shell',
        controller: function ($state) {
      var self = this;
      self.$onInit = function() {
          footerPosition();
          console.log(123)
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
