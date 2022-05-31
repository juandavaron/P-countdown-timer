
function countdown() {
    function daysInAMonth() {
        // Month select
        const currentMonth = currentDate.getMonth();
        const oddMonth = [0, 2, 4, 6, 7, 9, 11];
        const evenMonth = [3, 5, 8, 10];

        let totalDays = 0;
        if (oddMonth.includes(currentMonth)) {
            totalDays = 31;
        } else if (evenMonth.includes(currentMonth)) {
            totalDays = 30;
        } else {
            totalDays = 28;
        };

        return totalDays;
    }

    const currentDate = new Date();
    const nextYear = new Date(`1 Jan ${currentDate.getFullYear() + 1}`);
    const totalSeconds = (nextYear - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24)
    const months = Math.floor(totalSeconds / 3600 / 24 / daysInAMonth());

    const secondsElement = document.getElementById('seconds');
    const minsElement = document.getElementById('mins');
    const hoursElement = document.getElementById('hours');
    const daysElement = document.getElementById('days');
    const monthsElement = document.getElementById('months');

    secondsElement.innerHTML = formatTime(seconds);
    minsElement.innerHTML = formatTime(minutes);
    hoursElement.innerHTML = formatTime(hours);
    daysElement.innerHTML = days;
    monthsElement.innerHTML = formatTime(months);

    function formatTime(time) {
        // Add 0 to time
        return time < 10 ? `0${time}` : time;
    }
}

// Call
countdown();
setInterval(countdown, 1000);













// const newYears = '1 Jan 2020'

// function countdown(){
//     const newYearsDate = new Date(newYears)
//     const currentDate = new Date()

//     const seconds = (newYearsDate - currentDate) / 1000;
//     const days = Math.floor(seconds / 360 / 24);
//     const hours = Math.floor(seconds / 360) % 24;
//     const minutes = Math.floor(seconds / 60) % 60;
// }