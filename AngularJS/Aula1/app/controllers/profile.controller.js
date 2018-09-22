angular.module('firstModule')
    .controller('ProfileController', profileController);

function profileController($scope, UserService) {
    $scope.carregarUser = carregarUser;

    function carregarUser(username) {
        UserService.getUserData(username).then(
            function (data) {
                $scope.user = data;
            }
        );
        UserService.getUserData(username + '/repos').then(
            function (data) {
                $scope.repos = data;
            }
        );
    }
}