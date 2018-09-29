angular.module('toDoModule', ['ui.router'])
    .run(function ($transitions, $state) {
        M.AutoInit();
        console.log('started the app');
    });
