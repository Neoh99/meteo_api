const apikey = "2c57ef45ebdf36f05bdc52df8555204c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr&";
const oneHour = 3600000;


let memoryCity = "Niort";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// Appel à l'API OpenWeather avec la ville en paramètre de fonction
async function checkWeather(city){
  memoryCity = city;
  const response = await fetch(apiurl + `q=${city}` + `&appid=${apikey}`);
  var data = await response.json();
 
  console.log(data);

  document.querySelector(".city").innerHTML = data?.name;
  document.querySelector(".temp").innerHTML = Math.round(data?.main?.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data?.main?.humidity + "%";
  document.querySelector(".wind").innerHTML = data?.wind?.speed + "km/h";
  document.querySelector("#weather-icon").innerHTML = getWeatherImage(data?.weather[0]?.main);
}

function getWeatherImage(weather){
  let weatherImage = ""

  switch (weather) {
    case "Clouds":
      weatherImage = "<img src=\"../meteo_api/img/clouds.png\" class=\"weather-icon\"/>";
      break;
  
    case "Rain":
      weatherImage = "<img src=\"../meteo_api/img/rain.png\" class=\"weather-icon\"/>";
      break;

    case "Drizzle":
      weatherImage = "<img src=\"../meteo_api/img/bruine.png\" class=\"weather-icon\"/>";
      break;

    case "Thunderstorm":
      weatherImage = "<img src=\"../meteo_api/img/orage.png\" class=\"weather-icon\"/>";
      break;  

    case "Snow":
      weatherImage = "<img src=\"../meteo_api/img/neige.png\" class=\"weather-icon\"/>";
      break;
    
    case "Atsmosphere":
      weatherImage = "<img src=\"../meteo_api/img/fumee.png\" class=\"weather-icon\"/>";
      break;

    default:
      weatherImage = "<img src=\"../meteo_api/img/sun.png\" class=\"weather-icon\"/>";
      break;
  }

  return weatherImage
}

// Fonction appelée quand on clique sur le bouton
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);

})

// Fonction appelée au chargement de la page
window.addEventListener("load", function () {
  checkWeather(memoryCity);
});

// L'api sera appelé toutes les heures (3 600 000 ms)
setInterval(function() {
  checkWeather(memoryCity)
}, oneHour);