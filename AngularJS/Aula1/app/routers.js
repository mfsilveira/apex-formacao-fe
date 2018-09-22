//Injeção de dependência, o último parâmetro tem que ser a função (tem que seguir a ordem)
angular.module('firstModule').config(['$stateProvider', '$urlRouterProvider', configuration]);

function configuration($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/sweetHome'); //Quando url vier em branco, joga pra sweetHome
    $stateProvider
        .state({
            name: 'home',
            abstract: true, //bloqueia o acesso direto a rota
            url: '/sweetHome',
            templateUrl: './app/views/home.view.html', 
            controller: 'HomeController'
    })

    .state({
        name: 'home.profile',
        url: '/profile',
        templateUrl: './app/views/profile.view.html',
        controller: 'ProfileController'
})
}
