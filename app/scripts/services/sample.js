'use strict';

angular.module('ngscApp')
  .service('Sample', ['$resource','$scope',function Sample($resource,$scope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return	$resource('http://locahost:3000/samples',{});
  });
