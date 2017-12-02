'use strict';

app.component(
    'customer', {
        templateUrl: 'views/customer.html',
        controllerAs: 'customer',
        controller: function ($state) {
            var self = this;
            self.logos = [];
            self.$onInit = function() {
                $("#header_bar span").css("color","black");
                $("#customer_bar span").css("color","#1855a7");
                for(var i=1;i<17;i++){
                    self.logos.push("\../images/logo"+i+".png");
                }
            };

        }
    }
);
