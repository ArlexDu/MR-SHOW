'use strict';

app.component(
    'service', {
        templateUrl: 'views/service.html',
        controllerAs: 'service',
        controller: function ($state) {
            var self = this;


            self.$onInit = function() {
                $("#header_bar span").css("color","black");
                $("#service_bar span").css("color","#1855a7");
            };

        }
    }
);
