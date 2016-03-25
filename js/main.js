/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute','ngAnimate', 'ui.bootstrap'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/*use template cache to override carousel functionality - prev & next arrow glyphicon replaced by font-awesome icons.*/
app.run(function($templateCache) {
  $templateCache.put("uib/template/carousel/carousel.html",
      "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
      " <div class=\"carousel-inner\" ng-transclude></div>\n" +
      " <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\">\n" +
      " <span aria-hidden=\"true\" class=\"icon-prev\"></span>\n" +
      " <span class=\"sr-only\">previous</span>\n" +
      " </a>\n" +
      " <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\">\n" +
      " <span aria-hidden=\"true\" class=\"icon-next\"></span>\n" +
      " <span class=\"sr-only\">next</span>\n" +
      " </a>\n" +
      " <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
      " <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
      " <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
      " </li>\n" +
      " </ol>\n" +
      "</div>\n" +
    "");
  $templateCache.put("uib/template/carousel/slide.html",
      "<div ng-class=\"{'active': active}\" class=\"item text-center\" ng-transclude></div>\n" +
    "");
});

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( $scope, $location, $http ) {
  console.log("Page Controller reporting for duty.");

  $scope.slideInterval = 3000;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	  var slides = $scope.slides = [
			{image: 'http://placehold.it/1900x455&text=Slide One', text: 'Caption 1', id: 0 },
			{image: 'http://placehold.it/1900x455&text=Slide Two', text: 'Caption 2', id: 1 },
			{image: 'http://placehold.it/1900x455&text=Slide Three', text: 'Caption 3', id: 2 }
	  ];
	  var currentIndex = 1;
  // Activates the Carousel
  /*$('.carousel').carousel({
    interval: 5000
  });*/

  // Activates Tooltips for Social Links
  /*$('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })*/
});