// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.splice(0,2)
}
const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length - 2)
}

let selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers()

];

const createFareMultiplier = (n) => {
  return () => {
    n * 4
  }
}
const fareDoubler = () => {
  createFareMultiplier() * 2;
}
const fareTripler = () => {
  createFareMultiplier() * 3;;
}
const selectDifferentDrivers = function(drivers, arrayOfDrivers) {
  return arrayOfDrivers(drivers)
}