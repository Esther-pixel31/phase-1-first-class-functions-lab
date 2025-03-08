// Code your solution in this file!
// 1️Returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

//  Returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//  Function that returns a fare multiplier function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Fare doubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// Fare tripler using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Function that selects drivers based on a passed function
const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
};

//  Test Cases
const drivers = ["Alice", "Bob", "Charlie", "David", "Eve"];


