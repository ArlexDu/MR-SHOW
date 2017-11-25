'use strict';

app.component(
    'service', {
        templateUrl: 'views/service.html',
        controllerAs: 'service',
        controller: function ($state) {
            var self = this;


            self.$onInit = function() {
                $("#header_bar a").css("color","black");
                $("#service_bar a").css("color","blue");
            };

        }
    }
);
