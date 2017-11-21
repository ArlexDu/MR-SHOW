'use strict';

/**
 * @ngdoc overview
 * @name mingruapp
 * @description
 * # app
 *
 * Main module of the application.
 */

var app = angular.module('app', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'textAngular',
    'ngFileUpload'
]);

app.config(function($httpProvider) {

});

function footerPosition(){
    $("footer").removeClass("fixed-bottom");
    var contentHeight = document.body.scrollHeight,//网页正文全文高度
        winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
    console.log(contentHeight);
    console.log(winHeight);
    if(!(contentHeight > winHeight)){
        //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
        $("footer").addClass("fixed-bottom");
    } else {
        $("footer").removeClass("fixed-bottom");
    }
}