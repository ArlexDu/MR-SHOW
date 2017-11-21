'use strict';

app.component(
    'customer', {
        templateUrl: 'views/customer.html',
        controllerAs: 'customer',
        controller: function ($state) {
            var self = this;
            self.logos = [
                "../images/logo1.png",
                "../images/logo2.png",
                "../images/logo3.png",
                "../images/logo4.png",
                "../images/logo5.png",
                "../images/logo6.png",
                "../images/logo7.png",
                "../images/logo8.png",
                "../images/logo9.png",
                "../images/logo10.png",
                "../images/logo11.png",
                "../images/logo12.png",
                "../images/logo13.png",
                "../images/logo14.png",
                "../images/logo15.png",
                "../images/logo16.png"

            ];
            self.$onInit = function() {
            };

        }
    }
);
