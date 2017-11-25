'use strict';

app.component(
    'aboutus', {
        templateUrl: 'views/aboutus.html',
        controllerAs: 'aboutus',
        controller: function ($state) {
            var self = this;


            self.$onInit = function() {
                $("#header_bar a").css("color","black");
                $("#aboutus_bar a").css("color","blue");
            };

        }
    }
);
