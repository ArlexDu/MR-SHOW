'use strict';

app.component(
    'guide', {
        templateUrl: 'views/guide.html',
        controllerAs: 'guide',
        controller: function ($state) {
            var self = this;

            self.$onInit = function () {
                window.onresize = function () {
                    resizeToCover();
                };
                $(window).trigger("resize");

            };

            function resizeToCover() {
                var height = $(window).height();
                var width = $(window).width();
                $(".guide-main").css({
                    "width": width,
                    "height": height
                });
            }

            self.goHome = function () {
                $state.go('app.home');

            }


        }
    }
);
