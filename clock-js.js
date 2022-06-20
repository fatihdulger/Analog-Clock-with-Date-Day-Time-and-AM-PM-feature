/*const clock = ()=>{
    let d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let time = `${hours}:${min}:${sec}`
    clock1.innerText = time;
}
setInterval(clock, 1000); */

setInterval(clock, 1000);

const hourHand = document.querySelector('[data-hour-hand')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')

function clock() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;
    rotationHands(secondHand,seconds)
    rotationHands(minuteHand,minutes)
    rotationHands(hourHand,hours)
}



function rotationHands(element, rotationHands) {
    element.style.setProperty('--rotation', rotationHands * 360)
};

clock(); // to load the clock without lagging 
//to work on to display month and day and date

const yearDisplay = document.querySelector('.date')
const dayNameDisplay = document.querySelector('.day')
const monthNameDisplay = document.querySelector('.month')


const date = new Date();

date.toLocaleDateString();
console.log(date);

const day = date.getDay();
var days = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 
var dayName = days[date.getDay()];

var dayNumber = date.getDate();
console.log(dayNumber);

const month = date.getMonth();
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];
const monthName = months[date.getMonth()];

const year = date.getFullYear();

yearDisplay.innerHTML = year;

dayNameDisplay.innerHTML = `${dayName}|${dayNumber}`;

monthNameDisplay.innerHTML = monthName;

// minutes and seconds

let minutes = date.getMinutes();
let seconds = date.getSeconds();



// AM/PM

const  amPm = document.querySelector('.am-pm');

//const am = time < 12
//const pm = time > 12

let time = date.getHours();

function dayPart() {
    
    if(time >= 12) {
        return `PM`;
    } else {
        return `AM`;
    };
};
dayPart();
console.log(dayPart());
amPm.innerHTML = dayPart();


 // digital clock stand



const standClock = document.querySelector('.stand')
standClock.innerHTML =`${dayName} ${dayNumber} ${monthName} \n ${year}`
/*function perpetualDigitalClock() {
    let perp = date.toString().substring(0,24);
    //standClock.innerText = date.toString().substring(0,24);
    standClock.innerText = perp;
   
}
setInterval(perpetualDigitalClock, 1000);

//console.log(standClock); */

//standClock.innerHTML = date;

