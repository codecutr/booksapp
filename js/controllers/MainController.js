app.controller('MainController', ['$scope', function($scope) {

    $scope.title = 'All Time Favorites';

    //In the controller, attach promo to $scope, and set its value to your own string.
    $scope.promo = 'Keep Calm and Read a Book';

    //Attach a new property to $scope named products. Set it equal to an array of objects.
    $scope.products = [{
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        cover: 'img/the-book-of-trees.jpg',
        likes: 0,
        dislikes: 0
    }, {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
    }, {
        name: 'Be Frank With Me',
        price: 9.99,
        pubdate: new Date('2016', '02', '01'),
        cover: 'img/BeFrankWithMe.jpg',
        likes: 0,
        dislikes: 0
    }, {
        name: 'Harry Potter',
        price: 19.99,
        pubdate: new Date('2016', '02', '01'),
        cover: 'img/HarryPotter.jpg',
        likes: 0,
        dislikes: 0
    }]

    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };

    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };


}]);
