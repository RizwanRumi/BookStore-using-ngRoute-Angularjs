/// <reference path="../Scripts/angular.js" />


var BookService = angular.module('BookService', []);


BookService.factory('BookApi', ['$http', function ($http) {

    var urlBase = "http://localhost:9235/api/Books";
    var BookApi = {};

    BookApi.getBooks = function (id) {       
        return $http.get(urlBase + '/' + id);
    }

    BookApi.insertBook = function (book) {
        return $http.post(urlBase, book);
    };


    return BookApi;
}]);
