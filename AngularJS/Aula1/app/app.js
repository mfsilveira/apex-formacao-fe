//Linha abaixo instancia um novo módulo
//angular.module('firstModule', []);

//Linha abaixo dá um get no módulo
//angular.module('firstModule');

angular.module('firstModule', ['ui.router', 'app.components', 'ngAnimate'])
    .run(function ($transitions, $state) { //Primeira coisa que a aplicação angular chama

        $transitions.onStart({ to: 'home.**' }, function (evt) {
            let name = localStorage.getItem('name');
            let senha = localStorage.getItem('senha');

            if (name !== 'mf' || senha !== '123456') {
                $state.go('login');
                M.toast({ html: "<span>Login ou senha inválido(s).<span>",
                          classes: "rounded red darken-1" });
            }

            console.log('Foi pra Home');
        });

        M.AutoInit();
        console.log('started the app');
    });
