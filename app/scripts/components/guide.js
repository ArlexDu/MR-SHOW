'use strict';

app.component(
    'guide', {
        templateUrl: 'views/guide.html',
        controllerAs: 'guide',
        controller: function ($state,$window) {
            var self = this;

            self.$onInit = function() {
                $("header").hide();
                $window.onresize() {
                    console.log("resize");
                    resizeToCover();
                };
                // $window.trigger("resize");
            };

            function resizeToCover(){
                var height = $(document).height();
                var width = $(document).width();
                console.log("w:"+width);
                console.log("h:"+height);
                $("#guide-background").css({
                    "width":width,
                    "height":height
                });
            }

        }
    }
);
