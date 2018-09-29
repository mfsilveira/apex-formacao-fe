angular.module('firstModule')
    .filter('mydate', mydate)

function mydate() {
    return function (value, attrs) {
        return moment(value).format(attrs); //format('L LTS')
    }
}