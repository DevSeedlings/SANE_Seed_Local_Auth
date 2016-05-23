angular.module('app').directive('navDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/nav/navTmpl.html',
    controller: 'navCtrl'
  };
});
