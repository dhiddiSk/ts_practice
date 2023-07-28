"use strict";
exports.__esModule = true;
var movieName = "dewana";
movieName = "hassena";
// I get error for the below statement
//movieName = 100
var movieRelease = true;
movieRelease = false;
// The below statement throws an error
//movieRelease = "ffr"
var myNames = "Saikrishna";
var itsBooleans = true;
var itsAnys = "string";
itsAnys();
//delayed initialization
var theMovieName;
var moviesArray = ["sambha", "simhadri", "panja"];
for (var _i = 0, moviesArray_1 = moviesArray; _i < moviesArray_1.length; _i++) {
    var item = moviesArray_1[_i];
    if (item === "panja") {
        theMovieName = item;
    }
}
// reupdate the movieName
theMovieName = "janda";
