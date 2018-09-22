angular.module('app.components')
.directive('appNav',[appNav]);

function appNav(){
    return {
        restrict: 'E', // E -> Element, A -> Atributo, C -> Class, M -> Matches comments
        scope: {
            meuNome: '=', // '=' pega a variável que está entre aspas (trata como variável), '@' pega a string que está entre aspas (trata como string)
            title: '@'
        },
        templateUrl: './app/directives/navbar/navbar.directive.html',
        link: link
    }

    function link(scope, element, attrs){
        console.log(scope);
        console.log(element);
        console.log(attrs)
    }
}
