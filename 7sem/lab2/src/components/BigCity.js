import React, {Component} from 'react';
import {CityCard} from "./CityCard";

export class BigCity extends Component{
    componentWillMount() {
        this.setState({json: this.props.json});
    }

    render(){
        let name = this.props.json.name;
        let icon = this.props.json.icon;
        let temp = this.props.json.temp;
        let iconLink = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";

        return(
            <div>
                <div>
                    <h2>{name}</h2>
                    <div>
                        <img alt="icon" src={iconLink}/>
                        <h1>{temp}</h1>
                    </div>
                </div>
            <CityCard json={this.props.json}/>
            </div>

        );
    }
}
