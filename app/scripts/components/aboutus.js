'use strict';

app.component(
    'aboutus', {
        templateUrl: 'views/aboutus.html',
        controllerAs: 'aboutus',
        controller: function ($state) {
            var self = this;


            self.$onInit = function() {
                $("#header_bar span").css("color","black");
                $("#aboutus_bar span").css("color","#1855a7");
            };

        }
    }
);
