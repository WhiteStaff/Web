import React, {Component} from 'react';
import {BigCity} from "./BigCity";
import CitiesPanel from "./CitiesPanel";

export class Wrapper extends Component {

    componentWillMount() {
        this.setState({
            positionAllowed: false, downloadFlag: false, json: {
                coord: "0",
                wind: "0",
                humidity: "0",
                pressure: "0",
                clouds: "0",
                name: "",
                temp: "",
                icon: " "
            }
        });
        navigator.geolocation.getCurrentPosition((position) => {
                this.setState({positionAllowed: true});
                this.findWeatherDetailsForCoords(position.coords)

            },
            (position) => {
                this.setState({positionAllowed: false});

            });


    }

    render() {
        if (this.state.positionAllowed) {
            return (
                <div>
                    <header>
                        <div class="container">
                            <div class="row">
                            <div class="col-4">
                        <span class="sh ">Погода здесь</span>
                            </div>
                            <div class="col-3 my-auto mx-auto">
                        <button class="btn btn-secondary " onClick={() => {
                            navigator.geolocation.getCurrentPosition((position) => {
                                this.findWeatherDetailsForCoords(position.coords)
                            })
                        }}>Обновить геолокацию
                        </button>
                            </div>
                            </div>
                        </div>
                    </header>
                    <BigCity json={this.state.json}/>
                    <CitiesPanel />
                </div>
            );
        } else {
            return (
                <div>
                    <span>Пощел нахуй здесь</span>
                    <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>

                    <button onClick={() => {
                        this.findWeatherDetailsForName(this.state.inputValue)

                    }}>Поиск
                    </button>
                    <BigCity json={this.state.json}/>
                    <CitiesPanel/>

                </div>
            )
        }
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    appKey = "2e19bb27bd5e717bac388dc0c1827b17";

    findWeatherDetailsForName(searchInput) {
        if (searchInput === "") {
            // alert("tut")
        } else {
            let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + this.appKey;
            // alert(searchInput);
            this.httpRequestAsync(searchLink, (response) => {
                let json = JSON.parse(response);
                this.setState({json: {
                        coord: json.coord.lon + ", " + json.coord.lat,
                        wind: json.wind.speed + " m/s",
                        humidity: json.main.humidity + " %",
                        pressure: json.main.pressure + " hpa",
                        clouds: json.weather[0].description
                }
                })

            });
        }
    }

    findWeatherDetailsForCoords(coords) {
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?lat=" + coords.latitude + "&lon=" + coords.longitude + "&appid=" + this.appKey;
        this.httpRequestAsync(searchLink, (response) => {
            let json = JSON.parse(response);
            this.setState({json: {
                    coord: json.coord.lon + ", " + json.coord.lat,
                    wind: json.wind.speed + " m/s",
                    humidity: json.main.humidity + " %",
                    pressure: json.main.pressure + " hpa",
                    clouds: json.weather[0].description,
                    icon: json.weather[0].icon,
                    name: json.name,
                    temp:  parseInt(json.main.temp - 273) + "°C"
                }
            })

        });

    }

    //  theResponse(response) {
    //     let jsonObject = JSON.parse(response);
    //     this.json = jsonObject;
    //     // this.set(jsonObject);
    //      console.log(jsonObject)
    // }


    httpRequestAsync(url, callback) {
        console.log("hello");
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200)
                callback(httpRequest.responseText);
            else if (httpRequest.status === 404) {
                this.setError();
            }
        }
        httpRequest.open("GET", url, true);
        httpRequest.send();
    }

    //  set(jsonObject)
    // {
    //     alert(jsonObject)
    //     // var source   = document.getElementById('text-template-true').innerHTML;
    //     // var template = Handlebars.compile(source);
    //     // var context = {city_name: jsonObject.name,
    //     //     weather: jsonObject.weather[0].main,
    //     //     temp: parseInt(jsonObject.main.temp - 273) + "°",
    //     //     hum: jsonObject.main.humidity + "%",
    //     //     wind_spd: jsonObject.wind.speed + " mps"};
    //     // var html = template(context);
    //     //
    //     // document.getElementById('result').innerHTML = html;
    // }

    setError() {
        alert("Ну ой")
    }


}
