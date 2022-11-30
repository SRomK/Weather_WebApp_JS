const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn"); 
const cityRef = document.getElementById("city-input");
//const forecastContainer = document.getElementById("forecast");

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

        let forecast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${api_forecast}`;
        fetch(forecast_url)
        .then((response) => response.json())
        .then((data) => {
            for(let i = 0; i < 5; i++){
                document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min -288.53).toFixed(1)+"°";
            }
            for(let i = 0; i < 5; i++){
                document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max -288.53).toFixed(1)+"°";
            }
            for(let i = 0; i < 5; i++){
                document.getElementById("img" +(i+1)).src = "./img/icons/"+ data.list[i].weather[0].icon +".png";
            }
        })
        })
        
        
        .catch(() => {
          result.innerHTML = `<h3 class="input-notvalid">City not found</h3>`;
        });
    }
  };
/*
function defaultScreen(){
    document.getElementById("city-input-forecast").defaultValue = "London";
    getInfo();
}*/

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function checkDay(day) {
    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else {
        return day +d.getDay();
    }
};

function dayAppears() {
    for(let i = 0; i < 5; i++){
        document.getElementById("day"+(i+1)).innerHTML = weekday[checkDay(i)];
    }
};



searchBtn.addEventListener("click", getWeather);
//window.addEventListener("load", (getWeather) => console.log("Page fully loaded"));
  