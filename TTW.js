let buttonStart = document.querySelector('.buttonStart');
let buttonStop = document.querySelector('.buttonStop');
let timer = document.querySelector('.timer');



min = 0;
hour = 0;
//Оставляем вашу функцию
function init() {
    sec = 0;
    setInterval(tick, 1000);
}

//Основная функция tick()
function tick() {
    sec++;
    if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) { //Визуальное оформление
        if (min < 10) {
            if (hour < 10) {
                timer.innerHTML ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                timer.innerHTML = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                timer.innerHTML = '0' + hour + ':' + min + ':0' + sec;
            } else {
                timer.innerHTML = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                timer.innerHTML = '0' + hour + ':0' + min + ':' + sec;
            } else {
                timer.innerHTML = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                timer.innerHTML = '0' + hour + ':' + min + ':' + sec;
            } else {
                timer.innerHTML = hour + ':' + min + ':' + sec;
            }
        }
    }
}min = 0;
hour = 0;
//Оставляем вашу функцию
function init() {
    sec = 0;
    setInterval(tick, 1000);
}

//Основная функция tick()
function tick() {
    sec++;
    if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) { //Визуальное оформление
        if (min < 10) {
            if (hour < 10) {
                timer.innerHTML ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                timer.innerHTML = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                timer.innerHTML = '0' + hour + ':' + min + ':0' + sec;
            } else {
                timer.innerHTML = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                timer.innerHTML = '0' + hour + ':0' + min + ':' + sec;
            } else {
                timer.innerHTML = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                timer.innerHTML = '0' + hour + ':' + min + ':' + sec;
            } else {
                timer.innerHTML = hour + ':' + min + ':' + sec;
            }
        }
    }
}
buttonStart.addEventListener('click', ()=> {
    init();
    tick();
})