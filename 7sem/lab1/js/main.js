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
    set(jsonObject.name, jsonObject.weather[0].main, parseInt(jsonObject.main.temp - 273) + "°",
        jsonObject.main.humidity + "%", jsonObject.wind.speed + "mps")
}



function httpRequestAsync(url, callback)
{
    console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
        else if (httpRequest.status == 404)
        {
            document.getElementById('result').innerHTML = "Неправильный город";
        }
    }
    httpRequest.open("GET", url, true); // true for asynchronous
    httpRequest.send();
}

function set(city, weather, temp, hum, wind_spd)
{
    var source   = document.getElementById('text-template').innerHTML;
    var template = Handlebars.compile(source);
    var context = {city_name: city, weather: weather, temp: temp, hum: hum, wind_spd: wind_spd};
    var html    = template(context);

    document.getElementById('result').innerHTML = html;
}
