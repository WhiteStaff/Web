import React from 'react';
import './App.css';
import {Wrapper} from "./components/Wrapper";
import CitiesPanel from "./components/CitiesPanel";
import {Provider} from "react-redux";
import configureStore from './store/configureStore'





const {store} = configureStore();

 function App() {
    return (
        <div>
            <header>
            </header>
            <Wrapper/>
            <Provider store={store}>
                    <CitiesPanel/>
            </Provider>
        </div>
    );
}

export default App;


