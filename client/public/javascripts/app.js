angular.module('nodeTodo', [])

.controller('mainController', function($scope, $http) {

    $scope.formData = {};
    $scope.todoData = {};

    // Get all minishop
    $http.get('/api/v1/minishop/items')
        .success(function(data) {
            $scope.todoData = data;
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });

    // Create a new todo
    $scope.createTodo = function(todoID) {
        $http.post('/api/v1/minishop/items', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todoData = data;
            })
            .error(function(error) {
                console.log('Error: ' + error);
            });
    };

    // Delete a todo
    $scope.deleteTodo = function(todoID) {
        $http.delete('/api/v1/minishop/items' + todoID)
            .success(function(data) {
                $scope.todoData = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});




