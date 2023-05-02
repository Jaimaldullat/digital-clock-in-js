function displayTime() {
    let dayTime = "AM";

    // Get Hours, Minutes, and Seconds from Today's date
    let todayDate = new Date()
    let hours = todayDate.getHours(); // 0 - 24
    let minutes = todayDate.getMinutes(); // 0 - 60
    let seconds = todayDate.getSeconds(); // 0 - 60

    if (hours === 0) {
        hours = 12;
    }

    // Convert 24H to 12H - By default we get 24H format
    if (hours > 12) {
        dayTime = 'PM';
        hours = hours - 12;
    }

    // Append 0 if value is less than 10
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    // Display Current Time on Screen
    let timeString = `${hours}:${minutes}:${seconds} ${dayTime}`;
    let clockContainer = document.getElementById('clockContainer');
    clockContainer.innerHTML = timeString;
}

// Initialize timer
displayTime();

// Update time after every second
setInterval(displayTime, 1000);