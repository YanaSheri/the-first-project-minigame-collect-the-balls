// Главный файл, в котором будем вызывать необходимые функции и действия игры

// вызываем функцию создания главного блока
sozdanieMainBlock();

// функция старта игры
function start() {
	// создаем стартовый блок
	sozdanieStartBlock();
	// создаем блок таймера
	sozdanieTimerBlock();
	// // при клике на старт-кнопку запускаем игру
	// sozdanieDopolnitelnoyKnopki();
	startKnopka.onclick = nachat;
}

// вызываем функцию старта игры
start();

// при начале игры выполняем эту функцию
function nachat() {
	// назначаем статус
	status = "nachat";
	// удаляем старт-блок
	udalenieStartBlock();
	// создаем блок очков
	sozdanieStars();
	// создаем блок жизней
	sozdanieLifes(); 
	// создаем шарик
	sozdanieBall();
	// создаем блок таймера
	sozdanieTimerBlock();
	// вызываем функцию обратного отсчета времени (запускаем таймер)
    timerIgry();
}


// функция стоп-игры
function stopIgra() {
	// назначаем статус
	status = "stop";
	// удаляеи блок очков
	udalenieStarsBlock();
	// удаляем блок жизней
	udalenieLifesBlock();
	// вызываем окончание игры
	sozdanieStopIgra();
	// зачищаем игровое поле
	//ochistitIgrovoePole();
}


// Функция ТАЙМЕРА 
function timerIgry() {
    // создаем переменную с функцией обратного отсчета
    const chasy = setInterval(function() {
        // заставляем цифру таймерблока уменьшаться на 1
		timerBlock.innerText = timerBlock.innerText - 1;
		if (status === "stop") {
      		clearInterval(chasy);
   		}
        // если внутри таймерблока станет 0, то
        if(timerBlock.innerText == 0) {
            // остановитть обратный отсчет
            clearInterval(chasy);
            // вывести в консоль текст
            console.log("Конец игры!","Вы заработали",stars.innerText,"балла(-ов)!");
            // вызываем окончание игры
            stopIgra();
		}
	}, 1000) // каждую секунду выполнять то что прописано в функции
}


