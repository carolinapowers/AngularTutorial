'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, Auth) {
    $scope.posts = Post.all;
    $scope.user = Auth.user;

    $scope.post = {
        url: 'http://',
        title: ''
    };

    //    $scope.submitPost = function () {
    //        Post.create($scope.post).then(function (ref) {
    //            $location.path('/posts/' + ref.name());
    //            $scope.post = {
    //                            url: 'http://',
    //                            title: ''
    //                        };
    //        });
    //    };

    $scope.deletePost = function (post) {
        Post.delete(post);

    };


});