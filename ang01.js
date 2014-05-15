function ctrl($scope, $filter) {
  $scope.greeting = "Hello";

  $scope.features = [
    {name: 'Talks', selected: false},
    {name: 'Listens', selected: false},
    {name: 'Ties its shoes', selected: false},
    {name: 'Goes on walks', selected: false}  ,
    {name: 'Jumps', selected: false}
  ];

  $scope.products = [
    {name: 'Collie Dog', features: [], selected: false},
    {name: 'Chimp', features: [], selected: false},
    {name: 'Parrot', features: [], selected: false},
    {name: 'Kangaroo', features: [], selected: false}
  ];

  $scope.deleteProduct = function (product) {
    $scope.products.splice($scope.products.indexOf(product), 1);
  };

  $scope.saveProduct = function () {
    $scope.products.push({name: $scope.addName});
    $scope.addName = "";

    $scope.showHome();
  };

  $scope.showHome = function () {
    $('#screenHome').show();
    $('#screen1').hide();
  };

  $scope.showScreen1 = function () {
    $('#screenHome').hide();
    $('#screen1').show();
  };
}