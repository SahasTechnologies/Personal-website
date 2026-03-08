// this fetches the html stuff with the ids
const timerSpan = document.getElementById('Timer');
const timerBtn = document.getElementById('timerButton');

// variables
let startingMinutes = 35; //i set this to 1 while resting btw so if its 1 in git pls change to 35
let time = startingMinutes * 60;
let timerRunning = false; //so the timer doesnt start on its own

// this starts the timer by changing the vatiable
timerBtn.addEventListener('click', () => {
    if (timerRunning) return;
    timerRunning = true;

    //maths stuff
    const countdown = setInterval(() => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
    

    // add 0 at front if less than 10secondss left
    seconds = seconds < 10 ? '0' + seconds : seconds;

    //show the actual tiemr
    timerSpan.innerHTML = `${minutes}:${seconds}`;

    //when timer is done
    if (time <= 0) {
        clearInterval(countdown);
        timerSpan.innerHTML = 'Done!';
        alert("Check your brownies!");
    }
    else {
        time--;
    }

    }, 1000);
});