// to get Api Data

// API
// previous
async function getWeatherData(cityName = "cairo") {
  let weatherResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=2a82015187c9409ba4705420232208&q=${cityName}&days=3`
  );
  var weatherData = await weatherResponse.json();
  displayTodayWeather(weatherData);
  displayTomorrowWeather(weatherData);
}
getWeatherData();
//
// search event
let searchCity = document.getElementById("searchCity");
let searchInput = document.getElementById("searchInput");

// if user entered 3 letters or more , city will be shown , else default city will still be shown :

searchCity.addEventListener("click", () => {
  if (searchInput.value.length >= 3) {
    getWeatherData(searchInput.value);
  } else {
    getWeatherData("cairo");
  }
});

// function displayWeather
// variables
let DateId = document.getElementById("DateId");
let locationCity = document.getElementById("locationCity");
let country = document.getElementById("country");
let temp = document.getElementById("tempId");
let feelsLike = document.getElementById("feelsLike");
let icon = document.getElementById("iconImage");
let weatherStatus = document.getElementById("weatherStatus");

let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let direction = document.getElementById("direction");

//
// function
async function displayTodayWeather(weatherData) {
  let data = weatherData;
  DateId.innerHTML = data?.current?.last_updated;
  locationCity.innerHTML = data?.location?.name;
  country.innerHTML = data?.location?.country;
  temp.innerHTML = data?.current?.temp_c + `<sup>o</sup> C`;
  icon.setAttribute("src", `https:${data?.current?.condition?.icon}`);
  feelsLike.innerHTML = data?.current?.feelslike_c + `<sup>o</sup> C`;
  weatherStatus.innerHTML = data?.current?.condition?.text;
  humidity.innerHTML = data?.current?.humidity + "%";
  wind.innerHTML = data?.current?.wind_kph + " Km/h";
  direction.innerHTML = data?.current?.wind_dir;
}
// displayTodayWeather();

// tomorrow weather
// variables
let tomorrowDateId = document.getElementById("tomorrowDateId");
let tomorrowLocationCity = document.getElementById("tomorrowLocationCity");
let tomorrowCountry = document.getElementById("tomorrowCountry");
let tomorrowTemp = document.getElementById("tomorrowTemp");
let tomorrowFeelsLike = document.getElementById("tomorrowFeelsLike");
let tomorrowIcon = document.getElementById("tomorrowIcon");
let tomorrowWeatherStatus = document.getElementById("tomorrowWeatherStatus");

let tomorrowHumidity = document.getElementById("tomorrowHumidity");
let tomorrowWind = document.getElementById("tomorrowWind");
let tomorrowDirection = document.getElementById("tomorrowDirection");
//
// function
async function displayTomorrowWeather(weatherData) {
  let tomorrowWeatherData = weatherData;
  tomorrowDateId.innerHTML =
    tomorrowWeatherData?.forecast?.forecastday[1]?.date;
  tomorrowLocationCity.innerHTML = tomorrowWeatherData?.location?.name;
  tomorrowCountry.innerHTML = tomorrowWeatherData?.location?.country;
  tomorrowTemp.innerHTML =
    tomorrowWeatherData.forecast?.forecastday[1]?.day?.avgtemp_c +
    `<sup>o</sup> C`;
  tomorrowWind.innerHTML =
    tomorrowWeatherData?.forecast?.forecastday[1]?.day?.maxwind_kph + " Km/h";
  tomorrowHumidity.innerHTML =
    tomorrowWeatherData?.forecast?.forecastday[1]?.day?.avghumidity + "%";
  tomorrowIcon.setAttribute(
    "src",
    `https:${tomorrowWeatherData?.forecast?.forecastday[1]?.day?.condition?.icon}`
  );
}
