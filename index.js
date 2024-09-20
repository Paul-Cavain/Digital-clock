//capture id:

const secondHand = document.getElementById('secondsHand');
const minuteHand = document.getElementById('minutesHand');
const hourHand = document.getElementById('hoursHand');

setInterval(function() {
    const currentDate = new Date();
    secondRatio =  currentDate.getSeconds() / 60;
    minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}, 1000);

function setRotation (element, rotationRatio) {
    element.style.setProperty ('--rotation', rotationRatio * 360)
}