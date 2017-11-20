'use strict';

app.component(
    'guide', {
        templateUrl: 'views/guide.html',
        controllerAs: 'guide',
        controller: function ($state) {
            var self = this;

            self.$onInit = function() {
                $("header").hide();
                window.onresize=function () {
                    resizeToCover();
                }
                $(window).trigger("resize");
            };

            function resizeToCover(){
                var height = $(window).height();
                var width = $(window).width();
                $(".guide-background").css({
                    "width":width,
                    "height":height
                });
            }

        }
    }
);
