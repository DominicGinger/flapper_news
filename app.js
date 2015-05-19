var app = angular.module('flapperNews', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        });

      $urlRouterProvider.otherwise('home');
    }]);

app.factory('posts', [function() {
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope', 'posts',
function($scope, posts){
  $scope.test = 'Hello World';
  $scope.posts = posts.posts;
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return;}
    $scope.posts.push({
      title: $scope.title, 
      upvotes: 0,
      link: $scope.link
    });
    $scope.title = '';
    $scope.link = '';
  };
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);
