const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
const cityRef = document.getElementById("city-input");
const cardContainer = document.getElementById("icons-container");
const fiveDaysTitle = document.getElementById("h1-forecast");
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
const afternoon = "12:00:00";
const d = new Date();

// console.log({ d })
//const forecastContainer = document.getElementById("forecast");

const RegExpression = /^[a-zA-Z\s]*$/;

const roundedNum = (data) => Math.round(data);

function checkDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
};

function dayAppears() {
    for (let i = 1; i < 6; i++) {
        document.getElementById("day" + (i + 1)).innerHTML = weekday[checkDay(i)];
    }
};

const getDataForecast = (apiUrl) => {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {

            fiveDaysTitle.innerHTML = `5 days weather forecast`;

            const transformData = data.list.map((item) => {
                // console.log({ dataAnteriorEntero: item.dt_txt })
                // console.log({ DatoAnteriorConSplit: item.dt_txt.split(" ") })
                // console.log({ DatoAnteriorConSplitMasCorchete1: item.dt_txt.split(" ")[1] })
                return {
                    ...item,
                    dt_txt: item.dt_txt.split(" ")[1]
                }
            }
            )
            // console.log({ transformData })
            const onlyFiveDays = transformData.filter((item) => item.dt_txt === afternoon)

            // console.log({ onlyFiveDays })

            const printCard = onlyFiveDays.map((item, index) =>
                `   
            <div class="icons">
                <p class="weather" id="day${index + 2}"></p>
                <div class="icon-img">
                    <img src="./img/icons/${item.weather[0].icon}.png" class="img-forecast" id="img5" alt="icon weather forecast">
                </div>
                <p class="minValues" id="day${index + 2}Min">Min: ${roundedNum(Number(item.main.temp_min - 273.15))}°</p>
                <p class="maxValues" id="day${index + 2}Max">Max: ${roundedNum(Number(item.main.temp_max - 273.15))}°</p>
            </div>`
            )
            cardContainer.innerHTML = printCard
            dayAppears()

            // for (let i = 0; i < 5; i++) {
            //     document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Math.round(Number(transformData[i].main.temp_min - 273.15)) + "°";
            // }
            // for (let i = 0; i < 5; i++) {
            //     document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Math.round(Number(transformData[i].main.temp_max - 273.15)) + "°";
            // }
            // for (let i = 0; i < 5; i++) {
            //     document.getElementById("img" + (i + 1)).src = "./img/icons/" + transformData[i].weather[0].icon + ".png";
            // }
            
        }) .catch((err) => {
            fiveDaysTitle.innerHTML = "";
            cardContainer.innerHTML = "";
        });

}

const getWeather = () => {
    let cityValue = cityRef.value;
    //If input field is empty
    if (cityValue.trim().length == 0 || !RegExpression.test(cityValue)) {
        result.innerHTML = `<div class="input-notvalid-wrapper"><h3 class="input-notvalid">Please enter a city name</h3></div>`;
        cardContainer.innerHTML = "";
        fiveDaysTitle.innerHTML = "";
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
          
          `;    // DATA.COD ES EL CODIGO DE RESPUESTA DE LA API === 200 ES QUE LA RESPUESTA ES SATISFACTORIA DEL PRIMER FETCH
                // PARA QUE SE EJECUTE EL SEGUNDO FETCH, COMO NECESITO DATOS DEL PRIMERO PARA LA URL, SOLO EJECUTARÉ EL SEGUNDO FETCH CUANDO
                // EL COD DEL PRIMERO SEA SATISFACTORIO (200)
                if (data.cod === 200) {
                    getDataForecast(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${api_forecast}`)
                }


            })


            .catch(() => {
                result.innerHTML = `<h3 class="input-notvalid">City not found</h3>`;
                cardContainer.innerHTML = "";
                fiveDaysTitle.innerHTML = "";
            });
    }
};
/*
function defaultScreen(){
    document.getElementById("city-input-forecast").defaultValue = "London";
    getInfo();
}*/


searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", (getWeather) => console.log("Page fully loaded"));
