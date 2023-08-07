"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let movieName = "dewana";
movieName = "hassena";
// I get error for the below statement
//movieName = 100
let movieRelease = true;
movieRelease = false;
// The below statement throws an error
//movieRelease = "ffr"
let myNames = "Saikrishna";
let itsBooleans = true;
let itsAnys = "string";
itsAnys();
//delayed initialization
let theMovieName;
const moviesArray = ["sambha", "simhadri", "panja"];
for (const item of moviesArray) {
    if (item === "panja") {
        theMovieName = item;
    }
}
// reupdate the movieName
theMovieName = "janda";
