'use strict';

app.component(
    'guide', {
        templateUrl: 'views/guide.html',
        controllerAs: 'guide',
        controller: function ($scope,$state) {
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
                $(".guide-main").css({
                    "width":width,
                    "height":height
                });
            }
            
            $scope.goHome=function() {
                $state.go('app.home');
            }

        }
    }
);
