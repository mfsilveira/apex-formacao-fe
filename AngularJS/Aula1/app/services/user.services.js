//factory é instanciada sob demanda, enquanto serviço instancia no carregamento do projeto do angular.
//todo factory e service precisa de um return
//https://api.github.com/users/lislainestachowoski
angular.module('firstModule')
.service('UserService',userService);

function userService($http, $q){ //$q => new promise do javascript
    return {
        getUserData: getUserData
    }

    function getUserData(name){
        var defer = $q.defer(); //defer responsável por instanciar a promise
        $http.get('https://api.github.com/users/' + name).then(
            function(response){
                defer.resolve(response.data);
            },
            function(error){
                console.log('Ops!Erro na parada');
                defer.reject(error);
            }
        );

        return defer.promise;
    }
}
