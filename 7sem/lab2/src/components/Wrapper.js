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
            },
            done: "noreq"
        });
        navigator.geolocation.getCurrentPosition((position) => {
                this.setState({positionAllowed: true});
                this.findWeatherDetailsForCoords(position.coords)

            },
            (position) => {
                this.setState({positionAllowed: false});
                console.log(this.state.json)

            });


    }

    render() {
        if (this.state.error == true)

            return (
                <div className="container">
                    <div class="row pl-3">
                        <span className="sh mr-4 pr-15">Найти погоду здесь</span>
                        <input class="favourite-input my-auto" value={this.state.inputValue} placeholder="Введите город"
                               onChange={evt => this.updateInputValue(evt)}/>

                        <button class="btn btn-secondary my-auto" onClick={() => {
                            this.findWeatherDetailsForName(this.state.inputValue)

                        }}>Поиск
                        </button>
                    </div>
                    <h2 class="error">Такого города во вселенной нет</h2>
                    <CitiesPanel/>

                </div>
            )
        else {
            if (this.state.positionAllowed) {
                //alert(1);
                return (
                    <div>
                        <header>
                            <div class="container">
                                <div class="row pl-3">
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
                        <BigCity json={this.state.json} done={this.state.done}/>
                        <CitiesPanel/>
                    </div>
                );
            } else {
                if (this.state.done) {

                    return (
                        <div class="container">
                            <div class="row pl-3">
                                <span class="sh mr-4 pr-5">Найти погоду здесь</span>
                                <input class="favourite-input my-auto " value={this.state.inputValue}
                                       onChange={evt => this.updateInputValue(evt)} placeholder="Введите город"/>

                                <button class="btn btn-secondary my-auto" onClick={() => {
                                    this.findWeatherDetailsForName(this.state.inputValue)

                                }}>Поиск
                                </button>
                            </div>
                            <BigCity json={this.state.json} />
                            <CitiesPanel/>

                        </div>
                    )
                }
                // else if (this.state.done=="noreq"){
                //
                //     return (
                //         <div class="container">
                //             <div class="row pl-3">
                //                 <span class="sh mr-4 pr-5">Найти погоду здесь</span>
                //                 <input class="favourite-input my-auto " value={this.state.inputValue}
                //                        onChange={evt => this.updateInputValue(evt)} placeholder="Введите город"/>
                //
                //                 <button class="btn btn-secondary my-auto" onClick={() => {
                //                     this.findWeatherDetailsForName(this.state.inputValue)
                //
                //                 }}>Поиск
                //                 </button>
                //             </div>
                //             <CitiesPanel/>
                //
                //         </div>
                //     )
                //
                // }
                else {
                    return (
                        <div class="container text-center">
                            <div className="row pl-3">
                                <div className="col-4">
                                    <span className="sh ">Погода здесь</span>
                                </div>
                                <div className="col-3 my-auto mx-auto">
                                    <button className="btn btn-secondary " onClick={() => {
                                        navigator.geolocation.getCurrentPosition((position) => {

                                            this.findWeatherDetailsForCoords(position.coords)
                                        })
                                    }}>Обновить геолокацию
                                    </button>
                                </div>

                            </div>
                            <h1>Подождите, данные загружаются</h1>
                            <div className="spinner-border m-5" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <CitiesPanel/>
                        </div>

                    );

                }
            }
        }
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    appKey = "2e19bb27bd5e717bac388dc0c1827b17";

    findWeatherDetailsForName(searchInput) {
        this.setState({done: false});
        if (searchInput === "") {
            // alert("tut")
        } else {
            let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + this.appKey;
            // alert(searchInput);
            this.httpRequestAsync(searchLink, (response) => {
                let json = JSON.parse(response);
                this.setState({
                    json: {
                        coord: json.coord.lon + ", " + json.coord.lat,
                        wind: json.wind.speed + " m/s",
                        humidity: json.main.humidity + " %",
                        pressure: json.main.pressure + " hpa",
                        clouds: json.weather[0].description,
                        icon: json.weather[0].icon,
                        name: json.name,
                        temp: parseInt(json.main.temp - 273) + "°C"
                    },
                    done: true
                })


            });
        }
    }

    findWeatherDetailsForCoords(coords) {
        this.setState({done: false});
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?lat=" + coords.latitude + "&lon=" + coords.longitude + "&appid=" + this.appKey;
        this.httpRequestAsync(searchLink, (response) => {
            let json = JSON.parse(response);
            this.setState({
                json: {
                    coord: json.coord.lon + ", " + json.coord.lat,
                    wind: json.wind.speed + " m/s",
                    humidity: json.main.humidity + " %",
                    pressure: json.main.pressure + " hpa",
                    clouds: json.weather[0].description,
                    icon: json.weather[0].icon,
                    name: json.name,
                    temp: parseInt(json.main.temp - 273) + "°C"
                },
                done: true
            })

        });

    }

    // theResponse(response) {
    //     let jsonObject = JSON.parse(response);
    //     this.json = jsonObject;
    //     // this.set(jsonObject);
    //      console.log(jsonObject)
    // }


    httpRequestAsync(url, callback) {
        console.log("hello");
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                callback(httpRequest.responseText);
                this.setState({error: false})

            } else if (httpRequest.status === 404) {
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

    error;

    setError() {
        this.setState({error: true})
    }


}
