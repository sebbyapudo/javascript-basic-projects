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

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// let futureDate = new Date(2023, 6, 1, 23, 59, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 26, 23, 59, 0)

const year = futureDate.getFullYear(); 
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// setting up the month and weekdays
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
let weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pmg`;

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  // 1s --> 1000ms
  // 1m --> 60s
  // 1hr --> 60mins
  // 1day --> 24hr

  // Values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour)  / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  
// setup values array
const values = [days,hours,mins,seconds];

function format(item) {
  if(item < 10) {
    return item.innerHTML = `0${item}`
  }
  return item
}

items.forEach((item, index)=>{
  item.innerHTML = format(values[index]);
});
if(t < 0) {
  clearInterval(countdown);
  deadline.innerHTML = `<h4>Sorry this giveaway has expired</h4>`
}

}
// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();