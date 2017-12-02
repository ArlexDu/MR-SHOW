'use strict';

app.component(
    'home', {
        templateUrl: 'views/home.html',
        controllerAs: 'home',
        controller: function ($state) {
            var self = this;

            self.$onInit = function() {
                $("#header_bar span").css("color","black");
                $("#home_bar span").css("color","#1855a7");
            };
    }
    }
);
