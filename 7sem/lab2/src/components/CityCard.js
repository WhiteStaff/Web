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
                <div>
                    <div><span>координаты</span>{this.coord}</div>
                    <div><span>координаты</span>{this.wind}</div>
                    <div><span>координаты</span>{this.humidity}</div>
                    <div><span>координаты</span>{this.pressure}</div>
                    <div><span>координаты</span>{this.clouds}</div>
                </div>
            );
        else
            return (<div>Совсем нихуя</div>)
    }
}
