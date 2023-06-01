const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


// Declaring global variables
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023, 6, 12, 11, 23, 0);
console.log(futureDate);

const year = futureDate.getFullYear(); 
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// setting up the month and weekdays
let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();

let weekday = futureDate.getDay();
weekday = weekdays[weekday]

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`