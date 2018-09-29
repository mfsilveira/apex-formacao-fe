angular.module('firstModule')
    .controller('ProfileController', profileController);

function profileController($scope, UserService) {
    $scope.carregarUser = carregarUser;
    $scope.carregarRepos = carregarRepos;

    function carregarUser(username) {
        UserService.getUserData(username).then(
            function (data) {
                $scope.user = data;
            }
        );
    }

    function carregarRepos(username) {
        UserService.getUserRepos(username + '/repos').then(
            function (data) {
                $scope.repos = data;
            }
        );
    }
}