import React, {Component} from 'react';
import {CityCard} from "./CityCard";
import {doDeleteItem, itemsFetchData} from "../actions/items";
import {connect} from "react-redux";

export class SavedCity extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.serverInfo.city);
    }

    render() {

        if (this.props.serverInfo.error)

            return (
                <div class="col-6">
                <div class="row">
                    <div class="col-6">
                        Города {this.props.serverInfo.city} в известной Вселенной нет
                    </div>
                    <div class="col-6 text-right">
                        <button class="btn-circle" onClick={() => this.props.delete(this.props.serverInfo.city)}>X
                        </button>
                    </div>
                </div>
                </div>

            )

        else {
            if (this.props.serverInfo.done) {
                let icon = this.props.serverInfo.data.weather[0].icon;
                let temp = parseInt(this.props.serverInfo.data.main.temp - 273) + "°C";
                let name = this.props.serverInfo.data.name;
                let iconLink = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
                return (
                    <div class="col-6">
                        <div class="row">
                        <div class="col-6"><h1>{name}</h1></div>
                            <div class="col-6 text-right">
                                <button class="btn-circle" onClick={() => this.props.delete(this.props.serverInfo.city)}>X</button>
                            </div>
                        </div>
                        <h1 class="my-auto">{temp}</h1>
                        <img alt="icon" src={iconLink}/>
                        <CityCard serverInfo={this.props.serverInfo.data}/>
                    </div>

                );
            } else {
                return (
                    <div>
                        <div>{this.props.serverInfo.data.name}</div>
                        <div>Подождите, данные загружаются</div>
                        <div class="spinner-border m-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
        }

    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        delete: (city) => dispatch(doDeleteItem(city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedCity);


