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
            return (
                    <CityCard json={this.state.json}/>

            );
        } else {
            return <div> Данные не загружены </div>
        }
    }
}


