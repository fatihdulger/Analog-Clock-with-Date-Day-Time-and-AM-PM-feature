Review JS bit and HTML class id sides.
Go thru the CSS especially media queries.!!!
you can add some features like; background color on the month or am/pm may change according to seasons or body background color may change by seasons or night and day. 
this can be done switch statement. 
you can do it when you have time.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/PORTFOLIO Projects/Analog Clock/clock-style.css">
    <title>My First Analog Clock</title>
</head>
<body>
    <div class="clock">
        <div class="hand hour" data-hour-hand></div>
        <div class="hand minute" data-minute-hand></div>
        <div class="hand second" data-second-hand></div>
        <div class="number number1">I</div>
        <div class="number number2">II</div>
        <div class="number number3">III</div>
        <div class="number number4">IV</div>
        <div class="number number5">V</div>
        <div class="number number6">VI</div>
        <div class="number number7">VII</div>
        <div class="number number8">VIII</div>
        <div class="number number9">IX</div>
        <div class="number number10">X</div>
        <div class="number number11">XI</div>
        <div class="number number12">XII</div>
    </div>
    



    <script src="/PORTFOLIO Projects/Analog Clock/clock-js.js"></script>
</body>
</html>

CSS-----

*, *::after, *::before { 
   box-sizing: border-box; /*using borderbox box sizing makes is much easier to size items */
   font-family: cursive, sans-serif;

}
/*to choose and target everything onthe project */
body {
    background: linear-gradient(to bottom, orange, rgb(30, 63, 183));
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;

}
.clock {
    width: 400px;
    height: 400px;
    background-color: rgb(239, 231, 231);
    border-radius: 50%;
    border: 3px solid black;
    position: relative;
    
}
/* now we need to positiong all numbers into circle*/
.clock .number {
    position: absolute;
    width: 100%;
    height: 100%;
    /* trick to make numbers rotation arond the clock easy to visualise*/
    /*background-color: red; adding backgrond colour helps to see all numbers stacked on*/
    text-align: center;
    /*transform: rotate(30deg); */
    /* to have all the numbers rotating we need create a variable>>> --rotation:0; */
    --rotation: 0;
    transform: rotate(var(--rotation));
    font-size: 1.5rem;
}
.clock .number1 { --rotation: 30deg; } /* when you do this it will rotate number1 element by 30deg round the clock >> so we need to apply this to other numbers in sequence so the numbers will position like clock */
.clock .number2 { --rotation: 60deg; }
.clock .number3 { --rotation: 90deg; }
.clock .number4 { --rotation: 120deg; }
.clock .number5 { --rotation: 150deg; }
.clock .number6 { --rotation: 180deg; }
.clock .number7 { --rotation: 210deg; }
.clock .number8 { --rotation: 240deg; }
.clock .number9 { --rotation: 270deg; }
.clock .number10 { --rotation: 300deg; }
.clock .number11 { --rotation: 330deg; }
/*.clock .number12 { --rotation: 360deg; } you dont need to worry about 12 as it is positined default */

/* this is all with number positioning.
/* now time to add hands of clock */

.clock .hand {
    --rotation: 0;
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 10px;
    height: 40%;
    background-color: rgb(0, 0, 0);
    border: 1px solid white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* hand offset 12 so we need to fix this */
    transform-origin: bottom;
    transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg)); /* make sure calc to convert that 1 value to degree . this is last bit decides how it rotates*/
    z-index: 10; /* to keep this hand at the top since it has absolute property*/
}
.clock .minute {
    width: 7px;
    height: 40%;
    background-color: rgb(0, 0, 0);

}
.clock .hour {
    width: 10px;
    height: 35%;
    background-color: rgb(0, 0, 0);
}
.clock .second {
    width: 3px;
    height: 44%;
    background-color: rgb(255, 0, 0);
}
/*we can use pseudo state */

.clock::after {
    content: ''; /* this is to create a content after clock div and put the black dot */
    position: absolute;
    background-color: black;
    z-index: 11;
    width:15px;
    height: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;

}
@media only screen and (max-width: 376px) {
    .clock {
        width: 275px;
        height: 275px;
        background-color: rgb(239, 231, 231);
        border-radius: 50%;
        border: 3px solid black;
        position: relative;
        
    }

};
@media only screen and (max-width: 600px) {
    .clock {
        width: 350px;
        height: 350px;
        background-color: rgb(239, 231, 231);
        border-radius: 50%;
        border: 3px solid black;
        position: relative;
        
    }

};


JAVASCRIPT

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
