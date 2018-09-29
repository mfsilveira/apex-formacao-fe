//Injeção de dependência, o último parâmetro tem que ser a função (tem que seguir a ordem)
angular.module('toDoModule').config(['$stateProvider', '$urlRouterProvider', configuration]);

function configuration($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state({
            name: 'home',
            url: '/home', //é só um exemplo com parâmetros, na prática não usar dessa maneira
            templateUrl: './app/views/home.view.html',
            controller: 'HomeController'
        })
}
