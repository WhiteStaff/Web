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
            if (httpRequest.readyState === 4 && httpRequest.status === 200)
                callback(httpRequest.responseText);
            else if (httpRequest.status === 404) {
                this.setError();
            }
        }
        httpRequest.open("GET", url, true);
        httpRequest.send();
    }
    setError() {
        // alert("Ну ой")
    }

    findWeatherDetailsForName(searchInput) {
        this.setState({done: false});
        if (searchInput === "") {
            // alert("tut")
        } else {
            let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + this.appKey;
            // alert(searchInput);
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
                            clouds: json.weather[0].description
                        },
                        done: true
                    })


            });
        }
    }

    render() {

        if (this.state.done) {
            let name = this.state.json.name;
            let icon = this.state.json.icon;
            let temp = this.state.json.temp;
            let iconLink = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
            return (
                <div>
                    <h2>{name}</h2>
                    <div>
                        <img alt="icon" src={iconLink}/>
                        <h1>{temp}</h1>
                    </div>
                    <CityCard json={this.state.json}/>
                </div>

            );
        } else {
            return <div> <div>{this.props.post.title}</div>Данные не загружены </div>
        }
    }
}


