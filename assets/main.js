

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("button");
const userHistory = document.getElementById("userHistory");
const userHistoryWrapper = document.getElementById("userHistoryWrapper");
const cityName = document.querySelector("#displayCity");
const cityTemp = document.querySelector("#temp");
const cityWind = document.querySelector("#wind");
const cityHumidity = document.querySelector("#humidity");
const dueDate = document.getElementById("dueDate");

const today = dayjs();
const formattedDate = today.format('MM/D/YYYY');
dueDate.textContent += ` ${formattedDate}`;

const searchHistory = [];
let lastSearchedCity = '';

function getWeather(city){
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`
  fetch(requestUrl)
    .then(function(resp){ return resp.json(); })
    .then(function(data){
      if (data.cod === "404") {
        alert("City not found! Please enter a valid city name.");
      } else {
        cityName.innerHTML = data.name;
        console.log(data.name)
        cityTemp.innerHTML = `Temp: ${data.main.temp}°F`;
        cityWind.innerHTML = `Wind: ${data.wind.speed} MPH`;
        cityHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
      }
    })
    .catch(function(error){ console.error(error); })
}

function storeUserHistory() {
  const storedHistory = localStorage.getItem("searchHistory");
  if (storedHistory) {
    const historyArray = JSON.parse(storedHistory);
    historyArray.forEach((city) => {
      const newButton = document.createElement("button");
      newButton.className = "btn btn-primary mb-2 bg-secondary";
      newButton.innerHTML = city;
      newButton.onclick = function() { getWeather(city); };
      userHistory.appendChild(newButton);
    });
  }
}

function retrieveUserHistory() {
  const searchHistory = [];
  const userHistoryButtons = userHistory.querySelectorAll("button");
  userHistoryButtons.forEach((button) => {
    searchHistory.push(button.innerHTML);
  });
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

function displayLastSearchedCity() {
  const lastSearchedCity = localStorage.getItem("lastSearchedCity");
  if (lastSearchedCity) {
    getWeather(lastSearchedCity);
  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = searchInput.value;
  if (city === "") {
    alert("Please fill in the search city field!");
    return;
  }
  getWeather(city);
  lastSearchedCity = city;
  localStorage.setItem("lastSearchedCity", lastSearchedCity);
  const newButton = document.createElement("button");
  newButton.className = "btn btn-primary mb-2 bg-secondary";
  newButton.innerHTML = city;
  newButton.onclick = function() { getWeather(city); };
  userHistory.appendChild(newButton);
  searchHistory.push(city);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  retrieveUserHistory();
});

document.addEventListener("DOMContentLoaded", function () {
  storeUserHistory();
  displayLastSearchedCity();
});