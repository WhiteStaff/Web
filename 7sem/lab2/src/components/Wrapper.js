import React, {Component} from 'react';
import {BigCity} from "./BigCity";
import CitiesPanel from "./CitiesPanel";

export class Wrapper extends Component {

    componentWillMount() {
        this.setState({
            positionAllowed: true,
            done: false,
            error : false
        });
        navigator.geolocation.getCurrentPosition(this.setPosition,this.setFail);


    }

    render() {
        if (this.state.error)
        {
            return(
            <div className="col-6">
                <div className="row">
                    <h1 class="alert-danger">
                        Либо ты не на Земле, либо отпали серваки
                    </h1>
                </div>
            </div>
            )
        }
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
                                            navigator.geolocation.getCurrentPosition(this.setPosition,this.setFail);
                                        }}>Обновить геолокацию
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </header>
                        <BigCity json={this.state.json} done={this.state.done}/>

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
                                    navigator.geolocation.getCurrentPosition(this.setPosition,this.setFail);
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
                                            navigator.geolocation.getCurrentPosition(this.setPosition, this.setFail);
                                        }}>Обновить геолокацию
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <BigCity json={this.state.json}/>
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
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude +
            '&appid=2e19bb27bd5e717bac388dc0c1827b17')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;

            })
            .then((response) => response.json())
            .then((response) => {
                this.setState(
                    {
                        json: response,
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
            latitude : 55.75,
            longitude : 37.62
        }

    setFail = () => {
        this.setState({done: false});
        this.getWeather(this.coords);
        this.setState({positionAllowed: false});
    };


}

