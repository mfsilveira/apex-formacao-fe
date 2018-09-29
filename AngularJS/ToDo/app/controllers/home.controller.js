angular.module('toDoModule')
    .controller('HomeController', ['$scope', homeController]);

function homeController($scope, $state) {
    $scope.tasks = [];

    $scope.addTask = function (name) {
        if ($scope.tasks.indexOf(name) >= 0)
            M.toast({ html: '<span>Tarefa ' + name + ' já adicionada.</span>', classes: 'rounded red darken-1' })
        else
        {
            M.toast({ html: '<span>Tarefa ' + name + ' foi adicionada.</span>', classes: 'rounded green darken-1' })
            $scope.tasks.push(String(name));
        }
            
    }

    $scope.removeTask = function (name) {
        $scope.tasks.splice($scope.tasks.indexOf(name), 1);
        console.log($scope.tasks);
        M.toast({ html: '<span>Tarefa ' + name + ' foi removida.</span>', classes: 'rounded green darken-1' })
    }
}
