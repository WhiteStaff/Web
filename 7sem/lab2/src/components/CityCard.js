import React, {Component} from 'react';

export class CityCard extends Component {

    componentWillMount() {
        this.parseJson()
    }

    parseJson() {
        this.coord = this.props.json.coord;
        this.wind = this.props.json.wind;
        this.humidity = this.props.json.humidity;
        this.pressure = this.props.json.pressure;
        this.clouds = this.props.json.clouds;
    }

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


    render() {
        this.parseJson();
        if (this.coord)
            return (
                <div >
                    <div class="alert alert-dark row px-0 mx-1">
                        <div class="col-6">Ветер</div>
                        <div class="col-6 text-right">{this.wind}</div>
                    </div>
                    <div class="alert alert-dark row px-0 mx-1">
                        <div class="col-6">Облачность</div>
                        <div class="col-6 text-right">{this.clouds}</div>
                    </div>
                    <div class="alert alert-dark row px-0 mx-1">
                        <div class="col-6">Давление</div>
                        <div class="col-6 text-right">{this.pressure}</div>
                    </div>
                    <div class="alert alert-dark row px-0 mx-1">
                        <div class="col-6">Влажность</div>
                        <div class="col-6 text-right">{this.humidity}</div>
                    </div>
                    <div class="alert alert-dark row px-0 mx-1">
                        <div class="col-6">Координаты</div>
                        <div class="col-6 text-right">[{this.coord}]</div>
                    </div>
                </div>
            );
        else
            return (<div>Совсем нихуя</div>)
    }
}
