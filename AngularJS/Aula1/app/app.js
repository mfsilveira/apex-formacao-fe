//Linha abaixo instancia um novo módulo
//angular.module('firstModule', []);

//Linha abaixo dá um get no módulo
//angular.module('firstModule');

angular.module('firstModule', ['ui.router','app.components'])
.run(function($rootScope){ //Primeira coisa que a aplicação angular chama

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams){
        console.log('passou por aqui');
        e.preventDefault();
    });
});
