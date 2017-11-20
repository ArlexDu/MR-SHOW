'use strict';

app.component(
    'guide', {
        templateUrl: 'views/guide.html',
        controllerAs: 'guide',
        controller: function ($state,$window) {
            var self = this;

            self.$onInit = function() {
                $("header").hide();
                $window.onresize=function () {
                    console.log("resize");
                    resizeToCover();
                }
                // $window.trigger("resize");
            };

            function resizeToCover(){
                var height = $(window).height();
                var width = $(window).width();
                $("#guide-background").css({
                    "width":width,
                    "height":height
                });
            }

        }
    }
);
