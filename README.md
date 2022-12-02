**EN**
# <img src="https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Images.png" width="100" height="100">
# Technical Test - Weather WebApp

## A functional project of a weather web app to search a city to get to know the actual weather and 5 days forecast


This project was built using HTML for structure, CSS for styling, JavaScript for functionalities and an API from OpenWeather to work with external data.

Here I go over each of the steps and technologies I used:


1. **HTML**
Created "index.html" file in project`s root and implemented basic html structure with semantic html tags to reinforce the meaning of the content and to improve SEO 

2. **Images Folder**
Created **img** folder for the favicon icon and inside a separate folder with the different weather icons

3. **CSS**
Created styles folder and inside it I created the specific **style.css** file with a universal selector with pseudo element specifications for the webapp window box-sizing specs, declared global variables to use within the css file and all the corresponding styles of my project, using type selectors, class selectors and id selectors

4. **Fetching Weather data using OpenWeather APIs**
First I created the file **api_key.js**, and after creating my account through [OpenWeather](https://openweathermap.org/) I copied my personal keys to make calls to the API to variables inside **api_key.js** to use them later 

5. **JavaScript**
I created an **app.js** file and structured it in the following way:

- At the top of the file you will find all the **global variables** I needed to store the data I required (arrays, strings, JS Methods, JS object, Math.round function)
- function **checkDay()** to check the day 
- function **dayAppears()** to render the day through id selector when the getDataForecast fetch gets the data successfully, and also launch checkDay()
- arrow function **getDataForecast(apiUrl)** implementing fetch with openWeather API and nested methods inside
- arrow function **getWeather()** to get actual weather, implementing JS method to inject HTML after successfull fetch and a condition to cast getDataForecast fetch once getWeather()'s fetch has been successfull
- Implemented an **addEventListener** to launch fetches and nested methods (injecting content in the app after a successful fetch) once the search button is clicked


## How to run the app:

In order to run the app, visualize the code and also run the test you will need to have [git](https://git-scm.com/downloads) previously installed in your system/computer, choose a code editor of your choice and follow these steps:

* Copy URL of the [github project](https://github.com/SRomK/Weather_WebApp_JS)
* Open VSCode or editor of your choice, select or create an empty folder to inject the project when cloned 
* Open Terminal in VSCode
* Run command:

### `git clone` (repository url)

* Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VSCode to compile web app with the web browser of your choice (preferably [Chrome](https://support.google.com/chrome/answer/95346?hl=es&co=GENIE.Platform%3DDesktop))

## To run JEST Test 

You will need clone the repo into an empty folder in your system, and with VSCode already opened with the respective project folders and files already injected in the empty folder, open a terminal and install JEST with the command:

### `npm i jest -D`

And to run the test use the command:

### `npm test utils.test.js`


**Note:** in case package.json file doesn't clone properly, the json file should include the property script for testing, like this:

<img src="./img/script_json.png" width="150" height="150">


## Fast Visualization

From green botton named `<CODE>`in the github repository, you can download a zip file of the project to a folder in your system and launch it from the **index.html** file.
Or as an alternative download from this [Google Drive Link](https://drive.google.com/drive/folders/1yTgq_FLXpR8ZTg6IUkz-ZG9FCsWw7xfM?usp=share_link) all the  project files to your computer and launch the **index.html** file to open with your web browser (preferably [Chrome](https://support.google.com/chrome/answer/95346?hl=es&co=GENIE.Platform%3DDesktop)). 

***********************************************************

**ES**
# <img src="https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Images.png" width="100" height="100">
# Prueba Técnica - Weather WebApp

## Proyecto Web de una App del clima que te permite buscar una ciudad y obtener el clima actual y la predicción a 5 dias

Este proyecto fue realizado usando HTML para la estructura, CSS para los estilos, JavaScript para las funcionalidades y la API de OpenWeather para trabajar con data externa.

Pasos que seguí y tecnologías usadas:


1. **HTML**
Cree un fichero "index.html" en la raiz del proyecto e implemente la estructura html basica con etiquetas de html semantico para reforzar el significado del contenido de la app y por buenas practicas de cara a SEO

2. **Images Folder**
Cree la carpeta **img** para el icono favicon y dentro una carpeta separada con los distintos iconos para el cambio del clima

3. **CSS**
Cree la carpeta de estilos y dentro el fichero **style.css** indicando inicialmente con el selector universal y especificaciones con pseudo elementos para la window de la app Web y asignando el box-sizing. Tambien declare las variables globales para usar a lo largo del fichero css y todos los estilos correspondientes para mi proyecto, usando selectores de tipo type, class selectors y id selectors 

4. **Fetching Weather data usando OpenWeather APIs**
Primero cree un fichero con el nombre de **api_key.js**, y luego de crear mi cuenta a través de [OpenWeather](https://openweathermap.org/) copie mis keys personales y declare dos variables para guardar las keys allí y poder usarlas luego para llamar a la API

5. **JavaScript**
Cree la carpeta **js** y dentro el fichero **app.js** y lo organice de la siguiente manera:

- Al principio del fichero declare todas mis **variables globales** que iba necesitando para guardar todo tipo de data que requeria(arrays, strings, JS Methods, JS object, Math.round function)
- function **checkDay()** para verificar el dia 
- function **dayAppears()** para renderizar cada dia utilizando el selector id cuando el getDataForecast fetch fuera exitoso y lanzar checkDay()
- arrow function **getDataForecast(apiUrl)** implementando un fetch con la API de openWeather API y metodos anidados dentro
- arrow function **getWeather()** para obtener el clima actual, implementando metodos de JS para inyectar HTML despues de un fetch exitoso y una condicion para lanzar getDataForecast fetch una vez que el fetch de getWeather() haya sido exitoso
- Luego de las funciones fetch implemente un **addEventListener** en el botón de busqueda para "activar" los fetch y que implementen contenido a traves de las llamadas exitosas a la API 


## Lanzar la app:

Para lanzar la app y poder visualizar mejor el codigo y lanzar los test debes tener instalado [git](https://git-scm.com/downloads) en tu ordenador, elegir un editor de código y seguir los siguientes pasos:

* Copiar URL del repositorio [github project](https://github.com/SRomK/Weather_WebApp_JS)
* Abrir VSCode u otro editor y elegir o crear una carpeta vacia donde inyectar el proyecto al clonarlo 
* Abrir Terminal en VSCode
* Correr comando:

### `git clone` (repository url)

* Instalar la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VSCode para poder visualizar la app web en el navegador web (preferentemente [Chrome](https://support.google.com/chrome/answer/95346?hl=es&co=GENIE.Platform%3DDesktop))

## Para correr JEST Test 

Despues de clonar el repositorio a una carpeta vacia en el ordenador y con VSCode ya abierto con el proyecto en la carpeta anteriormente vacia, abrir una terminal e instalar JEST con el siguiente comando: 

### `npm i jest -D`

Y para correr el test usar el comando:

### `npm test utils.test.js`


**Nota:** En el caso de que el archivo package.json no se haya clonado correctamente, el archivo json deberia incluir la propiedad script para el testeo de esta forma: 

<img src="./img/script_json.png" width="150" height="150">


## Visualización rapida

Desde el repositorio en GitHub hay un botón verde llamado `<CODE>`. Desde allí puede descargar un archivo comprimido zip en su sistema y lanzar el fichero **index.html** para poder ver el proyecto.
O como alternativa decargarlo a su sistema desde este [Google Drive Link](https://drive.google.com/drive/folders/1yTgq_FLXpR8ZTg6IUkz-ZG9FCsWw7xfM?usp=share_link) y lanzar el fichero **index.html** para abrir en una ventana del navegador (preferentemente [Chrome](https://support.google.com/chrome/answer/95346?hl=es&co=GENIE.Platform%3DDesktop)). 