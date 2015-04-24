myApp.controller('heroCtrl', HeroCtrl);

function HeroCtrl($scope) {
    $scope.heroes = heroes;

    var selected = -1;

    setView('list');

    function setView(view) {
        $scope.view = view;
    }

    $scope.startAdd = function startAdd() {
        $scope.heroBox = '';
        setView('add');
    }

    $scope.cancel = function cancel() {
        setView('list');
    }

    $scope.add = function add() {
        $scope.heroes.push($scope.heroBox);
        setView('list');
    }

    $scope.startEdit = function startEdit(index) {
        selected = index;
        $scope.heroBox = $scope.heroes[index];
        setView('edit');
    }

    $scope.save = function save() {
        $scope.heroes[selected] = $scope.heroBox;
        setView('list');
    }

    $scope.startRemove = function startRemove(index) {
        selected = index;
        setView('delete');
    }

    $scope.remove = function remove() {
        $scope.heroes.splice(selected, 1);
        setView('list');
    }

    $scope.getSelected = function getSelected() {
        return heroes[selected];
    }
}
