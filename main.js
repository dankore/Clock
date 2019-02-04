const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // make minute hand work 
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    // make minute hand work
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // make hour hand work
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}

setInterval(setDate, 1000);