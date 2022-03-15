// Функция получения СЛУЧАЙНОГО ЧИСЛА
function random(max) {
    // случайное число от 1 до максимума
    let sluchainoeChislo = 1 + Math.random() * (max + 1);
    // округляем до целого числа
    sluchainoeChislo = Math.floor(sluchainoeChislo);
    //console.log(sluchainoeChislo);
    // возвращаем данные (результат); return - вернуть
    return sluchainoeChislo;
}

// //смещение шарика - функция при нажатии на кнопку Go-Ball!
// goSharik.onclick = function() {
//     //шарик перемещается вправо на 10пикселей при каждом нажатии на кнопку
//     ball.style.left = ball.offsetLeft + 10 + "px";
//     //шарик уменьшается в своей высоте на 10 пкс
//     ball.style.height = ball.clientHeight - 10 + "px";
//     //шарик уменьшается в своей ширине на 10 пкс
//     ball.style.width = ball.clientWidth - 10 + "px";
// }


/* ====================================================================
 Функции для создания элементов игры
======================================================================*/

/*  Создаем ГЛАВНЫЙ БЛОК выбрав по селектору body 
создаем и помещаем в него информационный блок, блок игрового поля и блок дополнительной кнопки
    <div id="pole"></div>
    <div id="info-block"></div>
    <div id="dopKnopka-block"></div> */
function sozdanieMainBlock() {
    // объявляем переменную по селектору body
    const body = document.querySelector("body");
    // создаем информационный блок div
    infoBlock = document.createElement("div");
    // добавляем тегу div => id="info-block"
    infoBlock.id = "info-block";
    // помещаем инфоблок в body
    body.appendChild(infoBlock);
    // создаем блок div игрового поля
    igrovoePole = document.createElement("div");
    // добавляем тегу div => id="pole"
    igrovoePole.id = "pole";
    // помещаем блок игрового поля в body
    body.appendChild(igrovoePole);
    // создаем блок div дополнительной кнопки
    dopKnopkaBlock = document.createElement("div");
    // добавляем тегу div => id="dopKnopka-block"
    dopKnopkaBlock.id = "dopKnopka-block";
    // помещаем блок дополнительной кнопки в body
    body.appendChild(dopKnopkaBlock);
}

// создаем СТАРТОВЫЙ БЛОК
/* <div id="start-block">
    <button id="start-knopka">Start the game</button>   
</div> */
function sozdanieStartBlock() {
    // создаем блок div <div id="start-block">
    startBlock = document.createElement("div");
    startBlock.id = "start-block";
    // создаем кнопку button <button id="start-knopka">Start the game</button> 
    startKnopka = document.createElement("button");
    startKnopka.id = 'start-knopka';
    startKnopka.innerText = "Start the game";
    // добавляем кнопку в стартовый блок
    startBlock.appendChild(startKnopka);
    // добавляем стартовый блок в игровое поле
    igrovoePole.appendChild(startBlock);
}

// создаем БЛОК ОЧКОВ
/* <div id="stars">0</div> */
function sozdanieStars() {
    // создаем блок div
    stars = document.createElement("div");
    // добавляем тегу div => id="stars"
    stars.id = "stars";
    // добавляем элемент очки в игровое поле <div id="pole"></div>
    igrovoePole.appendChild(stars);
    // обнуляем очки
    stars.innerText = "0";
    ochki = 0;
}

// Функция СОЗДАНИЯ ЖИЗНЕЙ
/* <div id="lifes"><span></span><span></span><span></span></div> */
function sozdanieLifes() {
    // создаем блок жизней div
    lifes = document.createElement("div");
    // добавляем тегу div => id="lifes"
    lifes.id = "lifes";
    // коробочка, в которой храним текущее количество отображенных жизней
    let tekucsheeColichestvoLifes = 0;
    // // в коробочку каждой жизни добавляем тег span
    // var zhiznRaz = document.createElement('span');
    // var zhiznDva = document.createElement('span');
    // var zhiznTri = document.createElement('span');
    // пока текущее количество жизней меньше, чем мы хотим видеть
    while(tekucsheeColichestvoLifes < colichestvoLifes) { 
        // // помещаем каждую из жизней в блок жизней lifes
        // lifes.appendChild(zhiznRaz);
        // lifes.appendChild(zhiznDva);
        // lifes.appendChild(zhiznTri);
        // создаем тег span
        const span = document.createElement('span');
        // помещаем span в блок жизней
        lifes.appendChild(span);
        // увеличиваем количество текущих отображенных жизней на 1
        tekucsheeColichestvoLifes = tekucsheeColichestvoLifes + 1;
    }; // конец цикла
    // блок жизней lifes добавляем в игровое поле
    igrovoePole.appendChild(lifes);    
}    


// Функция создания ТАЙМЕР-БЛОКА
/* <h3>Время: <span id="timer">30</span></h3> */
const h3 = document.createElement("h3");
function sozdanieTimerBlock() {
    // создаем заголовок h3 с текстом Время: " 
    h3.innerText = "Время: ";
    // в коробочку timerBlock добавляем тег span
    timerBlock = document.createElement("span");
        // прописываем span id="timer" и текст "20"
        timerBlock.id = "timer";
        timerBlock.innerText = "20";
    // добавляем в заголовок h3 тег span
    h3.appendChild(timerBlock);
    // добавляем загоовок h3 с таймером в информационный блок
    infoBlock.appendChild(h3);
}


// Функция создания ШАРИКА 
/* <div id="ball"></div> */
function sozdanieBall() {
    // создаем блок div
    const ball = document.createElement("div");  
    // // добавляем тегу div => id="ball"
    // ball.className = "ball";
    // определяем направление откуда вылетает шарик
    let napravlenie = random(2); // 1 - left, 2 - right
    // если напрвление = 1
    if(napravlenie == 1) {
        // то вылетает слева
        ball.className = "ball left";
    } else { // иначе вылетает справа
        ball.className = "ball right";
    }
    // при нажатии на мяч выполняется действие
    ball.onmousemove = function () { 
        // если клас шарика не является "мячом ожидающим удаления"
        if(ball.className != "ball ojidaet-udaliniya") { // то
           // увеличивается счет очков на случайное количество от 0 до 5
            ochki = ochki + random(5); 
            // выводим результат в поле очков
            stars.innerText = ochki; 
            // // шарик опускается
            // ball.style.top = ball.offsetTop + 100 + "px";
            // делаем шарик прозрачным
            ball.style.opacity = "0";
            // функция удаления и появления шарика
            setTimeout(function() { 
                // удаляем шарик
                ball.remove();
                // создаем переменную с классом ball
                const sushestvuetBall = document.querySelector(".ball"); //elemnt | null
                // если переменная не содержит данных
                if(sushestvuetBall == null) { // то
                    // сообщаем сколько шариков я хочу сделать
                    let colichestvoBall = random(5); // не больше 5 штук
                    // текущее количество шариков минимальное = 0
                    let tekucsheeColichestvoBall = 0;
                    // пока текущее количество шариков меньше заданного
                    while(tekucsheeColichestvoBall < colichestvoBall) { // то
                        // запускаем функцию создания шарика с отсрочкой в 1 секунду
                        sozdanieBall();
                        // а к текущему количеству шариков прибавляем 1
                        tekucsheeColichestvoBall = tekucsheeColichestvoBall + 1;
                    }; 
                }
            }, 200); // конец таймера  
        }
        // называем клас шаров "мячом ожидающим удаления"
        ball.className = "ball ojidaet-udaliniya";
        // // переменной цвета шарика присваиваем цвет фона шарика  
        // cvetSharika = ball.style.background;
        // // прописываем инструкцию: если цвет шарика желтый - то цвет шарика синий
        // if(cvetSharika == "yellow") { 
        //     ball.style.background = "blue";
        // } else { // иначе (т.е. если цвет шарика синий) - цвет шарика желтый 
        //     ball.style.background = "yellow";
        // } 
        // // при клике по шарику в 15-й раз запускается --> 
        // // функция stopIgra и обнуляется счет
        // if(ochki == 15) { 
        //     ochki = 0;
        //     stopIgra();
        // } 
    } // конец события onclick
    // через 200 милисекунд после создания шарика переместить его в новую позицию 
    setTimeout(function() {
        ball.style.top = random(350) + "px";
        ball.style.left = random(550) + "px"; 
    }, 10); 
    // запустить передвижение шарика вниз и удалять его если вышел за границу + отнимать жизнь 
    setTimeout(function() {
        // убираем свойство с задержкой изменения стилей
        ball.style.transition = "all 0s";
        // создаем таймер который каждые 10 милисекунд опускает шарик ниже
        const timerBall = setInterval(function() {
            // меняем позицию шарика опуская его на 1 пиксель вниз
            ball.style.top = ball.offsetTop + 1 + "px";
            // делаем проверку: если шарик вышел за пределы поля
            if(ball.offsetTop > 500) {
                // удаляем шарик
                ball.remove();
                // создаем шарик
                sozdanieBall();
                // уменьшаем количесвто жизней
                colichestvoLifes = colichestvoLifes - 1;
                // делаем проверку: если количество жизней = 0
                if(colichestvoLifes == 0) {
                    // вызываем функцию окончания игры
                    stopIgra();
                }
                // удаляем блок жизней
                udalenieLifesBlock();
                // создаем новый блок жизней
                sozdanieLifes();
                // 
                clearInterval(timerBall);
            }
        }, 10);
    }, 1000);
    // делаем проверку: если статус шарика не stop
    if(status != "stop") { // то
        // добавляем элемент шарик в игровое поле <div id="pole"></div>
        igrovoePole.appendChild(ball);
    }    
} // конец функции создания шарика


// Функция создания ДОПОЛНИТЕЛЬНОЙ КНОПКИ
/*  <button id="goSharik">Go-Ball!</button> */
// function sozdanieDopolnitelnoyKnopki() {
//     goSharik = document.createElement("button");
//     goSharik.id = "goSharik";
//     goSharik.innerText = "Go-Ball!";
//     dopKnopkaBlock.appendChild(goSharik);
// }


// Функция создания БЛОКА СТОП-ИГРА
/* <div id="stop-igra">
        <h2>Game over...</h2>
        <h3>Вы заработали 100 балла(-ов)!</h3>
    </div> */
function sozdanieStopIgra() {
    // создаем блок <div id="stop-igra"></div>
    const div = document.createElement("div");
        div.id = "stop-igra";
    // coздаем блок h2 <h2>Game over...</h2>
    const h2 = document.createElement("h2");
        h2.innerText = "Game over...";
    // coздаем блок h3 <h3>Конец игры! Вы заработали 100 балла(-ов)!</h3></div>
    const h3 = document.createElement("h3");
        h3.innerText = "Вы заработали " + ochki + " балла(-ов)!";
    // добавляем заголовок h2
    div.appendChild(h2);
    // добавляем заголовок h3
    div.appendChild(h3);
    // добавляем в игровое поле блок div
    igrovoePole.appendChild(div);
}



/*================================================
Удаление элементов
=================================================*/

// Функция удаления СТАРТОВОГО БЛОКА 
function udalenieStartBlock() {
    // удалить старт-блок
    startBlock.remove();
}

// Функция удаления БЛОКА ЖИЗНЕЙ
function udalenieLifesBlock() {
    lifes.remove();
}

// Функция удаления БЛОКА ОЧКОВ
function udalenieStarsBlock() {
    stars.remove();
}

// // Функция удаления ТАЙМЕРА
// function udalenieTimerBlock() {
//     h3.remove();
// }

function ochistitIgrovoePole() {
    igrovoePole.innerText = "";
}

// // Функция удаления ШАРИКОВ
// function udalenieBall() {
//     ball.remove();
// }

// // Функция удаления НАЧАЛА ИГРЫ
// function udalenieStart() {
//     start.remove();
// }

// // Функция удаления ОКОНЧАНИЯ ИГРЫ
// function udaleniestopIgra() {
//     stopIgra.remove();
// }











