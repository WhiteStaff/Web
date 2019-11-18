import React, {Component} from 'react';
import {BigCity} from "./BigCity";
import CitiesPanel from "./CitiesPanel";

export class Wrapper extends Component {

    componentWillMount() {
        this.setState({
            positionAllowed: true,
            done: false,
            error: false
        });
        navigator.geolocation.getCurrentPosition(this.setPosition, this.setFail);
    }

    render() {
        if (this.state.positionAllowed) {
            if (this.state.done) {
                return (
                    <div>
                        <header>
                            <div class="container">
                                <div class="row pl-3">

                                    <div class="col-4">
                                        <span class="sh ">Погода здесь</span>
                                    </div>
                                    <div class="col-3 my-auto mx-auto">
                                        <button class="btn btn-secondary " onClick={() => {
                                            navigator.geolocation.getCurrentPosition(this.setPosition,
                                                () => {
                                                    this.setFail()
                                                });
                                        }}>Обновить геолокацию
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </header>
                        <BigCity serverInfo={this.state.serverInfo} done={this.state.done}/>

                    </div>
                );
            } else {
                return (
                    <div class="container text-center">
                        <div className="row pl-3">
                            <div className="col-4">
                                <span className="sh ">Погода здесь</span>
                            </div>
                            <div className="col-3 my-auto mx-auto">
                                <button className="btn btn-secondary " onClick={() => {
                                    navigator.geolocation.getCurrentPosition((position) => {
                                            this.setPosition(position.coords)
                                        },
                                        () => {
                                            this.setFail()
                                        });
                                }}>Обновить геолокацию
                                </button>
                            </div>

                        </div>
                        <h1>Подождите, данные загружаются</h1>
                        <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>

                    </div>

                );
            }
        } else {
            if (this.state.done) {
                return (
                    <div class="container">
                        <div class="row pl-3">
                            <div className="container">
                                <div className="row pl-3">

                                    <div className="col-4">
                                        <span className="sh ">Погода в ДС</span>
                                    </div>
                                    <div className="col-3 my-auto mx-auto">
                                        <button className="btn btn-secondary " onClick={() => {
                                            navigator.geolocation.getCurrentPosition(this.setPosition, () => {
                                                this.setFail()
                                            });
                                        }}>Обновить геолокацию
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <BigCity serverInfo={this.state.serverInfo}/>
                    </div>
                );

            } else
                return (
                    <div class="container text-center">
                        <div className="row pl-3">
                            <div className="container">
                                <div className="row pl-3">

                                    <div className="col-4">
                                        <span className="sh ">Погода в ДС</span>
                                    </div>
                                    <div className="col-3 my-auto mx-auto">
                                        <button className="btn btn-secondary " onClick={() => {
                                            navigator.geolocation.getCurrentPosition(this.setPosition, () => {
                                                this.setFail()
                                            });
                                        }}>Обновить геолокацию
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <h1>Подождите, данные загружаются</h1>
                        <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>

                    </div>

                );
        }
    }

    getWeather = async (coords) => {
        await this.setState({done: false, error: false});
        fetch('http://localhost:4000/weather/coordinates?lat=' + coords.latitude + '&long=' + coords.longitude)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                console.log(response);
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                this.setState(
                    {
                        serverInfo: response,
                        done: true,
                        error: false
                    })
            })
            .catch(() => {
                    this.setState(
                        {
                            error: true
                        })
                }
            );

    };

    setPosition = (position) => {
        this.setState({done: false});
        this.getWeather(position.coords);
    };

    coords =
        {
            latitude: 55.75,
            longitude: 37.62
        }

    setFail = () => {
        this.setState({done: false});
        this.getWeather(this.coords);
        this.setState({positionAllowed: false});
    };


}

