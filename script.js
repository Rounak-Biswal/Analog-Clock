const secHand = document.querySelector('.sec_hand');
const minHand = document.querySelector('.min_hand');
const hourHand = document.querySelector('.hour_hand');

function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const secDegree = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDegree}deg)`;

    const min = now.getMinutes();
    const minDegree = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = now.getMinutes();
    const hourDegree = ((min / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);