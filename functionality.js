let btn1 = document.getElementById("start_btn");
let btn2 = document.getElementById("pause_btn");
let btn3 = document.getElementById("reset_btn");
let timer_text = document.getElementById("timer_text");

//Adding event listeners to all buttons
btn1.addEventListener("click" , Start);
btn2.addEventListener("click" , Stop);
btn3.addEventListener("click" , Reset);

let check = false;
let check_for_start = false;
//Defining the  Start function
let miliSec = 0;
let sec = 0;
let min= 0;
let hours = 0;
let event_value;
let ms, s , m , h;

function Start() {
    if(check_for_start === true) return;

    check = true;
    check_for_start = true;
    event_value = setInterval(function(){
        miliSec += 5;
        if(miliSec === 1000) {
            miliSec = 0;
            sec++;
        }
        if(sec === 60) {
            sec = 0;
            min++;
        }
        if(min=== 60) {
            min = 0;
            hours++;
        }
        if(hours === 24) {
            Reset();
        }

        //-> changing it to the string <-

        //For getting milliseconds
        if(miliSec < 10) {
            ms = "00" + miliSec;
        }
        else if(miliSec < 100) {
            ms = "0" + miliSec;
        }
        else {
            ms = miliSec;
        }

        // For getting seconds
        if(sec < 10) {
            s = "0" + sec;
        }
        else {
            s = sec;
        }

        // For getting minutes
        if(min < 10) {
            m = "0" + min;
        }
        else {
            m = min;
        }

        // For getting hours
        if(hours < 10) {
            h = "0" + hours;
        }
        else {
            h = hours;
        }

        timer_text.innerHTML = h + " : " + m + " : " + s + " : " + ms;
    },5)
}

//Defining the  Stop function
function Stop() {
    if(check === false) return;
    clearInterval(event_value);
    start_btn.innerText = "RESUME";
    check_for_start = false;
}

//Defining the Reset function
function Reset() {
    check = false;
    check_for_start = false;
    miliSec = 0;
    sec = 0;
    min = 0;
    hours = 0;
    timer_text.innerHTML = "00 : 00 : 00 : 000";
    clearInterval(event_value);
    start_btn.innerText = "START";   
}