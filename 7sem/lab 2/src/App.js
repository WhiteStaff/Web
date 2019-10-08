import React from 'react';
import logo from './logo.svg';

import {CitiesPanel} from "./components/CitiesPanel";
import {BigCity} from "./components/BigCity";
import {CityCard} from "./components/CityCard";
import  {WeatherInfo} from "./components/WeatherInfo";
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Данные о погоде
      </header>
      <BigCity/>
      <CitiesPanel/>
    </div>
  );
}

export default App;
