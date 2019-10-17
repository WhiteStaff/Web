import React, {Component} from 'react';
import {CityCard} from "./CityCard";

export class SavedCity extends Component {
    componentWillMount() {
        this.findWeatherDetailsForName(this.props.post.title);
        this.setState({done: false})
    }

    appKey = "2e19bb27bd5e717bac388dc0c1827b17";

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

    error;

    setError() {
        console.log("WSYUIurfydgstyr")
        this.setState({error: true})
    }

    findWeatherDetailsForName(searchInput) {
        this.setState({done: false});
        if (searchInput === "") {
        } else {
            let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + this.appKey;
            this.httpRequestAsync(searchLink, (response) => {
                let json = JSON.parse(response);
                this.setState(
                    {
                        json: {
                            name: json.name,
                            icon: json.weather[0].icon,
                            coord: json.coord.lon + ", " + json.coord.lat,
                            wind: json.wind.speed + " m/s",
                            humidity: json.main.humidity + " %",
                            pressure: json.main.pressure + " hpa",
                            clouds: json.weather[0].description,
                            temp: parseInt(json.main.temp - 273) + "°C"
                        },
                        done: true
                    })


            });
        }
    }


    render() {
        console.log(this.props.post.title, this.error)
        if (this.state.error == true)

            return (
                <div>
                    Такого города в известной Вселенной нет </div>
            )

        else {
            if (this.state.done) {

                let icon = this.state.json.icon;
                let temp = this.state.json.temp;
                let iconLink = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
                return (
                    <div class="container p-0">
                        <div class="row pl-3">
                            <div class="row pl-3">
                                <h1 class="my-auto">{temp}</h1>
                                <img alt="icon" src={iconLink}/>
                            </div>
                        </div>
                        <CityCard json={this.state.json}/>
                    </div>

                );
            } else {
                return (
                    <div>
                        <div>{this.props.post.title}</div>
                        <div>Подождите, данные загружаются</div>
                        <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
        }

    }
}


