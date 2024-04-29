

const displayResult = document.querySelector("#result");
const cityName = document.querySelector("#displayCity");
const cityTemp = document.querySelector("#temp");
const cityWind = document.querySelector("#wind");
const cityHumidity = document.querySelector("#humidity");
const dueDate = document.getElementById("dueDate");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("button");
const userHistory = document.getElementById("userHistory");
const userHistoryWrapper = document.getElementById("userHistoryWrapper");
const image = document.getElementById("icon");

const today = dayjs();
const formattedDate = today.format('MM/D/YYYY');
dueDate.textContent += ` ${formattedDate}`;

const searchHistory = [];

function getWeather(city){
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

function fetchWeather(city) {
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`
  fetch(requestUrl)
    .then(function(resp){ return resp.json(); })
    .then(function(data){
      return data;
    })
    .catch(function(error){ console.error(error); })
}

function displaySearchResult(data) {
  const resultHTML = `
    <h2>Search Result for ${data.name}</h2>
    <p>City: <span id="displayCity">${data.name}</span></p>
    <p>Temperature: <span id="temp">${Math.round(data.temp)}°F</span></p>
    <p>Wind: <span id="wind">${Math.round(data.wind)} mph</span></p>
    <p>Humidity: <span id="humidity">${Math.round(data.humidity)}%</span></p>
    <p>Date: <span id="dueDate">${formattedDate}</span></p>
  `;
  displayResult.innerHTML = resultHTML;
}

function storeUserHistory() {
  const storedHistory = localStorage.getItem("searchHistory");
  if (storedHistory) {
    const historyArray = JSON.parse(storedHistory);
    historyArray.forEach((city) => {
      const newButton = document.createElement("button");
      newButton.className = "btn btn-primary mb-2 bg-secondary";
      newButton.innerHTML = city;
      newButton.onclick = function() {
        getWeather(city);
      };
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

function displayAllData() {
  const storedHistory = localStorage.getItem("searchHistory");
  if (storedHistory) {
    const historyArray = JSON.parse(storedHistory);
    historyArray.forEach((city) => {
      fetchWeather(city).then((data) => {
        displaySearchResult(data);
      });
    });
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
  const newButton = document.createElement("button");
  newButton.className = "btn btn-primary mb-2 bg-secondary";
  newButton.innerHTML = city;
  newButton.onclick = function() {
    getWeather(city);
  };
  userHistory.appendChild(newButton);

  searchHistory.push(city);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  retrieveUserHistory();
});

document.addEventListener("DOMContentLoaded", function () {
  storeUserHistory();
  displayAllData();
});