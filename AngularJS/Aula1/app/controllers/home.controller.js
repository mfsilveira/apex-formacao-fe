angular.module('firstModule')
 .controller('HomeController', ['$scope', mainController]);

function mainController($scope){
    $scope.nome = 'Marcos Felipe';
    $scope.onChange = onChange;
}

function onChange(value){
    console.log(value);
}