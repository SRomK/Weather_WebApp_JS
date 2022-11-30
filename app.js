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

                        const transformData = data.list.map((item) => {
                            // console.log({ dataAnteriorEntero: item.dt_txt })
                            // console.log({ DatoAnteriorConSplit: item.dt_txt.split(" ") })
                            // console.log({ DatoAnteriorConSplitMasCorchete1: item.dt_txt.split(" ")[1] })
                            return { //lo que viene despues del return es un objeto,retornamos un objeto ya transformado
                                ...item, //el spread operator fusiona varias cosas
                                dt_txt: item.dt_txt.split(" ")[1]  //dt_txt: es porque necesitas indicarle la propiedad del objeto en la api
                            }
                        }
                        )
                        // console.log({ transformData })
                        const afternoon = "12:00:00";
                        const onlyFiveDays = transformData.filter((item) => item.dt_txt === afternoon)

                        console.log({ onlyFiveDays })

                        for (let i = 0; i < 5; i++) {
                            document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Math.round(Number(transformData[i].main.temp_min - 273.15)) + "°";
                        }
                        for (let i = 0; i < 5; i++) {
                            document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Math.round(Number(transformData[i].main.temp_max - 273.15)) + "°";
                        }
                        for (let i = 0; i < 5; i++) {
                            document.getElementById("img" + (i + 1)).src = "./img/icons/" + transformData[i].weather[0].icon + ".png";
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
//console.log(d);
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day) {
    if (day + d.getDay() > 6) { //0 + 3 (es 3 solo si es miercoles) es mayor que 6
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay(); //1 + 3 = 4 (hoy siendo miercoles 30) para que muestre jueves 
    }
};
//console.log(d.getDay());
function dayAppears() {
    for (let i = 1; i < 6; i++) { //porque en españa se empieza por lunes y aumento 1 y mayor que 6 en vez de 5
        document.getElementById("day" + (i + 1)).innerHTML = weekday[checkDay(i)];
    }
};

searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", (getWeather) => console.log("Page fully loaded"));



//el map lo que hace con el bloque de codigo de html (que map interpreta como un array y cada elemento es una carta de html) en este caso es hacer una copia del array y aplicarle una transformación a los elementos y devolver 
//un array nuevo con los elementos tranformados