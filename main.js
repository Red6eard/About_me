window.onload = function() {
      let apiKey = "6e21e6253ec263228596b846ab31d51a";
      let city = "Tula";
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=ru&appid=" + apiKey, true);
      xhr.onload = function() {
        if (this.status === 200) {
          let data = JSON.parse(this.responseText);
          let temp = data.main.temp;
          let weather = data.weather[0].description;
          document.getElementById("weather").innerHTML = "Температура в городе " + city + ": " + temp + "°C<br>" + "Погода: " + weather;
        }
      }
      xhr.send();
    };