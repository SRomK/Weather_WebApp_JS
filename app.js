const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn"); 
const cityRef = document.getElementById("city-input");
const forecastContainer = document.getElementById("forecast");

const RegExpression = /^[a-zA-Z\s]*$/;

const roundedNum = (data) => Math.round(data);

const getWeather = () => {
    let cityValue = cityRef.value;
    //If input field is empty
    if (cityValue.trim().length == 0 || !RegExpression.test(cityValue)) {
      result.innerHTML = `<div class="input-notvalid-wrapper"><h3 class="input-notvalid">Please enter a city name</h3></div>`;
    }

    //If input field is NOT empty
    else {
      let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api_key}&units=metric`;
      

      //Clear the input field
      cityRef.value = ""; // quitar el value inicial
    fetch(api_url)
        .then((resp) => resp.json())
        //If city name is valid

        // evitar que muestre data inexistente --->> if(cityValue == data.name){ }
        .then((data) => {
        let forecast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${api_key}`;
        fetch(forecast_url)
        .then((response) => response.json())
        .then((dataForecast) => {
            result.innerHTML = `
          <div class="flex-wrapper"> 
          <div class="container-weather"> 
          <h2 class="h2-cityName">${data.name}</h2>
          <h4 class="weather">${data.weather[0].main}</h4>
          <h4 class="feels-like">${data.weather[0].description}</h4>
          <img src="./img/icons/${data.weather[0].icon}.png">
          <h1 class="h1-mainTemp">${roundedNum(data.main.temp)}&#176;</h1>
          </div>
          </div>
          <div class="temp-container">
              <div>
                  <h4 class="title-temp">min</h4>
                  <h4 class="data-temp">${roundedNum(data.main.temp_min)}&#176;</h4>
              </div>
              <div>
                  <h4 class="title-temp">max</h4>
                  <h4 class="data-temp">${roundedNum(data.main.temp_max)}&#176;</h4>
              </div>
          </div>

          
          `;

          forecastContainer.innerHTML = `
          <div>${dataForecast.list[0].visibility}</div>
          `
        })
        })



          
        //If city name is NOT valid
        // evitar que muestre data inexistente --->> if(cityValue == data.name){ }
        .catch(() => {
          result.innerHTML = `<h3 class="input-notvalid">City not found</h3>`;
        });
    }
  };
  searchBtn.addEventListener("click", getWeather);
  //window.addEventListener("load", (getWeather) => console.log("Page fully loaded"));
  
