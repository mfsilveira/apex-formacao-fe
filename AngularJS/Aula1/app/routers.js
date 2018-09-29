//Injeção de dependência, o último parâmetro tem que ser a função (tem que seguir a ordem)
angular.module('firstModule').config(['$stateProvider', '$urlRouterProvider', configuration]);

function configuration($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/sweetHome/profile'); //Quando url vier em branco, joga pra sweetHome
    $stateProvider
        .state({
            name: 'home',
            abstract: true, //bloqueia o acesso direto a rota
            url: '/sweetHome/{name}/{senha}', //é só um exemplo com parâmetros, na prática não usar dessa maneira
            templateUrl: './app/views/home.view.html',
            controller: 'HomeController'
        })

        .state({
            name: 'home.profile',
            url: '/profile',
            templateUrl: './app/views/profile.view.html',
            controller: 'ProfileController'
        })

        .state({
            name: 'home.teste',
            url: '/teste',
            template: '<h1>Teste Olá</h1>'
        })

        .state({
            name: 'login',
            url: '/login',
            templateUrl: './app/views/login.view.html',
            controller: 'LoginController'
        })
}
