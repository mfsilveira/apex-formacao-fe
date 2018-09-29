//factory é instanciada sob demanda, enquanto serviço instancia no carregamento do projeto do angular.
//todo factory e service precisa de um return
//https://api.github.com/users/lislainestachowoski
angular.module('firstModule')
.service('UserService',userService);

function userService($http, $q){ //$q = new promise do angular
    return {
        getUserData: getUserData,
        getUserRepos: getUserRepos
    }

    function getUserData(name){
        var defer = $q.defer(); //defer responsável por instanciar a promise
        var request = {
            url: 'https://api.github.com/users/' + String(name),
            method: 'GET',
            headers: {
                'Authorization': "token 82a561c8916f3cd0ae47bb9229fb938d974f2ff2"
            }
        };

        $http(request).then(
            function(response){
                M.toast({html: 'Usuário carregado com sucesso!', classes: 'rounded'});
                defer.resolve(response.data);
            },
            function(error){
                M.toast({html: 'Erro ao carregar usuário!', classes: 'rounded'});
                console.log('Ops!Erro na parada ' + error);
                defer.reject(error);
            }
        );

        return defer.promise;
    }

    function getUserRepos(name){
        var defer = $q.defer(); //defer responsável por instanciar a promise
        var request = {
            url: 'https://api.github.com/users/' + String(name),
            method: 'GET',
            headers: {
                'Authorization': "token 82a561c8916f3cd0ae47bb9229fb938d974f2ff2"
            }
        };
        
        $http(request).then(
            function(response){
                M.toast({html: 'Repositórios carregados com sucesso!', classes: 'rounded'});
                defer.resolve(response.data);
            },
            function(error){
                M.toast({html: 'Erro ao carregar repositórios!', classes: 'rounded'});
                console.log('Ops!Erro na parada ' + error);
                defer.reject(error);
            }
        );

        return defer.promise;
    }
}
