
const card1 = document.getElementById("#card1")
const card2 = document.getElementById("#card2")
const card3 = document.getElementById("#card3")
const card4 = document.getElementById("#card4")
const card5 = document.getElementById("#card5")

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("button");
const image = document.getElementById("icon");

const today = dayjs();

const formattedDate = today.format('MM/D/YYYY');
dueDate.textContent += ` ${formattedDate}`;
const searchHistory = [];
let lastSearchedCity = '';



function getWeather1(city){
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`
  fetch(requestUrl)
    .then(function(resp){ return resp.json(); })
    .then(function(data){
      cityName.innerHTML = data.name;
      console.log(data.name)
      cityTemp.innerHTML = data.main.temp;
      cityWind.innerHTML = data.wind.speed;
      cityHumidity.innerHTML = data.main.humidity;
    })
    .catch(function(error){ console.error(error); })
}
function getWeather1(city){
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`
  fetch(requestUrl)
    .then(function(resp){ return resp.json(); })
    .then(function(data){
      cityName.innerHTML = data.name;
      console.log(data.name)
      cityTemp.innerHTML = data.main.temp;
      cityWind.innerHTML = data.wind.speed;
      cityHumidity.innerHTML = data.main.humidity;
    })
    .catch(function(error){ console.error(error); })
}
function getWeather2(city){
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`
  fetch(requestUrl)
    .then(function(resp){ return resp.json(); })
    .then(function(data){
      cityName.innerHTML = data.name;
      console.log(data.name)
      cityTemp.innerHTML = data.main.temp;
      cityWind.innerHTML = data.wind.speed;
      cityHumidity.innerHTML = data.main.humidity;
    })
    .catch(function(error){ console.error(error); })
}
function getWeather3(city){
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`
  fetch(requestUrl)
    .then(function(resp){ return resp.json(); })
    .then(function(data){
      cityName.innerHTML = data.name;
      console.log(data.name)
      cityTemp.innerHTML = data.main.temp;
      cityWind.innerHTML = data.wind.speed;
      cityHumidity.innerHTML = data.main.humidity;
    })
    .catch(function(error){ console.error(error); })
}
function getWeather4(city){
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`
  fetch(requestUrl)
    .then(function(resp){ return resp.json(); })
    .then(function(data){
      cityName.innerHTML = data.name;
      console.log(data.name)
      cityTemp.innerHTML = data.main.temp;
      cityWind.innerHTML = data.wind.speed;
      cityHumidity.innerHTML = data.main.humidity;
    })
    .catch(function(error){ console.error(error); })
}
function getWeather5(city){
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`
  fetch(requestUrl)
    .then(function(resp){ return resp.json(); })
    .then(function(data){
      cityName.innerHTML = data.name;
      console.log(data.name)
      cityTemp.innerHTML = data.main.temp;
      cityWind.innerHTML = data.wind.speed;
      cityHumidity.innerHTML = data.main.humidity;
    })
    .catch(function(error){ console.error(error); })
}