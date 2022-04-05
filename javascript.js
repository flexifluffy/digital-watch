// digital watch project

const time = document.getElementById('time');
const date = document.getElementById('date');

setInterval(clock, 1000);

function clock() {
    let currentTime = new Date();
    let seconds = currentTime.getSeconds();
    let minutes =  currentTime.getMinutes();
    let hours = currentTime.getHours();
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(hours < 10) {
        hours = '0' + hours;
    }
    let timeString = `${hours}:${minutes}:${seconds}`;
    time.innerHTML = timeString;


    let weekDay = currentTime.toLocaleDateString('en-US', {weekday:'long'});
    let monthDay = currentTime.toLocaleDateString('en-US', {month:'2-digit'});
    let year = currentTime.toLocaleDateString('en-US', {year:'numeric'});
    let monthName = currentTime.toLocaleDateString('en-US', {month:'long'});
    
    let dateString = `(${weekDay}) ${monthDay}/${monthName}/${year}`;
    date.innerHTML = dateString;

}
