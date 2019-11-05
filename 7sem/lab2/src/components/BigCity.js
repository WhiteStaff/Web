import React, {Component} from 'react';
import {CityCard} from "./CityCard";

export class BigCity extends Component {
    componentWillMount() {
        this.setState({json: this.props.json});
    }

    render() {
        let name = this.props.json.name;
        let icon = this.props.json.weather[0].icon;
        let temp = parseInt(this.props.json.main.temp - 273) + "°C";
        let iconLink = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

        return (
            <div class="container pl-0">
                <div class="row">
                    <div class="col-6">
                        <h2>{name}</h2>
                        <div class="row">
                            <div class="col-3">
                                <img alt="icon" width="100px" src={iconLink}/>
                            </div>
                            <h1 class="col-6 my-auto display-1">{temp}</h1>
                        </div>
                    </div>
                    <div class="col-6">
                        <CityCard json={this.props.json}/>
                    </div>
                </div>
            </div>

        );

    }
}
