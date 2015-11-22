var app = angular.module('myApp', []);
app.controller('tatiaCtrl', function ($scope) {
    $scope.calculate = function () {
        var d = $scope.b * $scope.b - 4 * $scope.a * $scope.c;
        if (d > 0) {
            var result = "კვადრატული განტოლების ფესვებია ";
            var x1 = (-$scope.b - Math.sqrt(d)) / (2 * $scope.a);
            var x2 = (-$scope.b + Math.sqrt(d)) / (2 * $scope.a);
            result += "x1=" + x1 + "  და  X2=" + x2;
            $scope.result = result;
        }
        
    }
	
});
