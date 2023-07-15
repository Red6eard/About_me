//**********Время*********

  function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
  
    // Добавляем ведущий ноль, если значения меньше 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    let timeString = hours + ":" + minutes + ":" + seconds;
  
    // Обновляем содержимое элемента на странице
    let clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;
  }
  
  // Обновляем время каждую секунду
  setInterval(updateClock, 1000);




//*********Дата************

 // Получаем текущую дату
 let currentDate = new Date();

 // Форматируем дату в виде "дд.мм.гггг"
 let formattedDate = ("0" + currentDate.getDate()).slice(-2) + "." + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "." + currentDate.getFullYear();

 // Добавляем дату на страницу
 document.getElementById("date").textContent = formattedDate;
 
 
 //***********День недели********
 
     // Массив с названиями дней недели
     let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
     // Получаем день недели (от 0 до 6)
     let dayOfWeek = currentDate.getDay();
         // Добавляем день недели на страницу
         document.getElementById("day").textContent = daysOfWeek[dayOfWeek];

// **********Погода******** 

const geocodeApiKey = "6e21e6253ec263228596b846ab31d51a";
const weatherApiKey = "6e21e6253ec263228596b846ab31d51a";
const city = "Tula";

// Запрос координат города с помощью сервиса геокодирования
const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=5&appid=${weatherApiKey}`;
fetch(geocodeUrl)
  .then(response => response.json())
  .then(data => {
    // Извлечение координат города из ответа геокодирования
  
    const lat = data[0].lat;
    const lng = data[0].lon;
    // Запрос данных о погоде с помощью сервиса погоды
    
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=ru&appid=${weatherApiKey}`;
    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        const weatherElement = document.getElementById("weather");
        const temperature = Math.round(data.main.temp - 273.15); // перевод в градусы Цельсия
        const weatherDescription = data.weather[0].description;
        const city = data.name
        const icon = data.weather[0].icon;
        weatherElement.innerHTML = `
          <div>
          <p>${city}</p>
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">
            <span>${temperature} °C, ${weatherDescription}</span>
          </div>
        `;
      });
  });