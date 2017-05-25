
/// <reference path="../Scripts/angular.js" />


var FileService = angular.module('FileService', []);


FileService.factory('FileApi', ['$http', function ($http) {

    var urlBase = "http://localhost:9235/api/Files";
    var FileApi = {};

    FileApi.UploadImage = function (data) {
        return $http.post(urlBase, data, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    }

    return FileApi;
}]);