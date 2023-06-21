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