const appKey = "2e19bb27bd5e717bac388dc0c1827b17";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
    if (event.key === "Enter") {
        findWeatherDetails();
    }
}

function findWeatherDetails() {
    if (searchInput.value === "") {
        document.getElementById('result').innerHTML = "Введи что ниб";
    }else {
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
        httpRequestAsync(searchLink, theResponse);
    }
}

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    set(jsonObject);
}



function httpRequestAsync(url, callback)
{
    console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200)
            callback(httpRequest.responseText);
        else if (httpRequest.status === 404)
        {
            setError();
        }
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function set(jsonObject)
{
    var source   = document.getElementById('text-template-true').innerHTML;
    var template = Handlebars.compile(source);
    var context = {city_name: jsonObject.name,
        weather: jsonObject.weather[0].main,
        temp: parseInt(jsonObject.main.temp - 273) + "°",
        hum: jsonObject.main.humidity + "%",
        wind_spd: jsonObject.wind.speed + " mps"};
    var html = template(context);

    document.getElementById('result').innerHTML = html;
}

function setError()
{
    var source   = document.getElementById('text-template-err').innerHTML;
    var template = Handlebars.compile(source);
    var html = template();

    document.getElementById('result').innerHTML = html;
}
