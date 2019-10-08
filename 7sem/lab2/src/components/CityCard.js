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
