import React, {Component} from 'react';
import {CityCard} from "./CityCard";
import {doDeleteItem, itemsFetchData} from "../actions/items";
import {connect} from "react-redux";

export class SavedCity extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.serverInfo.city);
    }

   /* appKey = "2e19bb27bd5e717bac388dc0c1827b17";

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


/*    render() {
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
}*/
    render() {
        if (this.props.serverInfo.isErrored) {
            return (
                <div className="col col-6 alert alert-danger">Произошла ошибка при попытке получить данные
                    города {this.props.serverInfo.city}.
                    <button onClick={() => this.props.fetchData(this.props.serverInfo.city)}
                            className="btn ml-auto">Повторить попытку
                    </button>
                    <button onClick={() => this.props.delete(this.props.serverInfo.city)}
                            className="btn ml-auto">Закрыть уведомление
                    </button>
                </div>

            )
        }

        if (this.props.serverInfo.done) {
            console.log(this.props.serverInfo);
            const icon = this.props.serverInfo.data.weather[0].icon;
            return (
                <div className="col col-6">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="p-2">{this.props.serverInfo.data.name}</h4>
                        <h4 className="p-2 ml-auto">{this.props.serverInfo.data.main.temp}˚C</h4>
                        <img className="p-2 ml-auto" alt="icon"
                             src={'https://openweathermap.org/img/wn/' + icon + '.png'}/>
                        <button onClick={() => this.props.delete(this.props.serverInfo.city)}
                                className="btn btn-default p-2 ml-auto">X
                        </button>
                    </div>

                    <CityCard serverInfo={this.props.serverInfo.data}/>
                </div>

            )
        } else {
            return (
                <div className="col col-6 text-center">
                    <h2>Происходит загрузка {this.props.serverInfo.city}, подождите</h2>
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
    };


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


