const dayOne = document.getElementById("card1");
const dayTwo = document.getElementById("card2");
const dayThree = document.getElementById("card3");
const dayFour = document.getElementById("card4");
const dayFive = document.getElementById("card5");

const cityOne = document.getElementById("city1");
const tempOne = document.getElementById("temp1");
const windOne = document.getElementById("wind1");
const humidityOne = document.getElementById("humidity1");

const cityTwo = document.getElementById("city2");
const tempTwo = document.getElementById("temp2");
const windTwo = document.getElementById("wind2");
const humidityTwo = document.getElementById("humidity2");

const cityThree = document.getElementById("city3");
const tempThree = document.getElementById("temp3");
const windThree = document.getElementById("wind3");
const humidityThree = document.getElementById("humidity3");

const cityFour = document.getElementById("city4");
const tempFour = document.getElementById("temp4");
const windFour = document.getElementById("wind4");
const humidityFour = document.getElementById("humidity4");

const cityFive = document.getElementById("city5");
const tempFive = document.getElementById("temp5");
const windFive = document.getElementById("wind5");
const humidityFive = document.getElementById("humidity5");

// Populate dates on cards
function populateDates() {
  const startDate = dayjs('2024-05-01');
  for (let i = 1; i <= 5; i++){
    const date = startDate.add(i - 1, 'day').format('MM/DD/YYYY');
    const dateElement = document.getElementById("day" + i);
    dateElement.textContent = `Date: ${date}`;
  }
}

// (link unavailable){API key}

// Call the function to populate the dates
function fetchAndPopulateData() {
  const forecastInput = document.getElementById("search");
  const forecastBtn = document.getElementById("button");
  forecastBtn.addEventListener("click", function() {
    const city = forecastInput.value;
    for (let i = 1; i <= 5; i++) {

      
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cfdc0648fd66403977fd3d7982f1618&units=imperial`)
        .then(response => response.json())
        .then(data => {
          const cityElement = document.getElementById(`city${i}`);
          const tempElement = document.getElementById(`temp${i}`);
          const windElement = document.getElementById(`wind${i}`);
          const humidityElement = document.getElementById(`humidity${i}`);
          cityElement.innerHTML = data.name;
          tempElement.innerHTML = `Temp: ${data.main.temp}°F`;
          windElement.innerHTML = `Wind: ${data.wind.speed} MPH`;
          humidityElement.innerHTML = `Humidity: ${data.main.humidity}%`;
          // Save data to local storage
          localStorage.setItem(`city${i}`, data.name);
          localStorage.setItem(`temp${i}`, data.main.temp);
          localStorage.setItem(`wind${i}`, data.wind.speed);
          localStorage.setItem(`humidity${i}`, data.main.humidity);
        })
        .catch(error => console.error(error));
    }
  });
}

// Populate cards from local storage
function populateCardsFromStorage() {
  for (let i = 1; i <= 5; i++) {
    const city = localStorage.getItem(`city${i}`);
    const temp = localStorage.getItem(`temp${i}`);
    const wind = localStorage.getItem(`wind${i}`);
    const humidity = localStorage.getItem(`humidity${i}`);
    const cityElement = document.getElementById(`city${i}`);
    const tempElement = document.getElementById(`temp${i}`);
    const windElement = document.getElementById(`wind${i}`);
    const humidityElement = document.getElementById(`humidity${i}`);
    cityElement.innerHTML = city;
    tempElement.innerHTML = `Temp: ${temp}°F`;
    windElement.innerHTML = `Wind: ${wind} MPH`;
    humidityElement.innerHTML = `Humidity: ${humidity}%`;
  }
}

fetchAndPopulateData();
populateDates();

// Populate cards from local storage on page load
window.addEventListener("load", function() {
  populateCardsFromStorage();
});