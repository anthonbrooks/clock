const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360 + 90);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(now);
}

setInterval(setDate, 1000);