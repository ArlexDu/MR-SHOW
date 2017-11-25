'use strict';

app.component(
    'home', {
        templateUrl: 'views/home.html',
        controllerAs: 'home',
        controller: function ($state) {
            var self = this;

            self.$onInit = function() {
                $("#header_bar a").css("color","black");
                $("#home_bar a").css("color","blue");
            };
    }
    }
);
