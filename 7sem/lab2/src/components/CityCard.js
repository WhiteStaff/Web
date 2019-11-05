import React, {Component} from 'react';

export class CityCard extends Component {

    componentWillMount() {
        this.parseJson()
    }

    parseJson() {
        this.coord = this.props.json.coord.lon + ", " + this.props.json.coord.lat;
        this.wind = this.props.json.wind.speed + " m/s";
        this.humidity = this.props.json.main.humidity + " %";
        this.pressure = this.props.json.main.pressure + " hpa";
        this.clouds = this.props.json.weather[0].description;
    }


    render() {
        this.parseJson();
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

    }
}
