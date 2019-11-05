import React from 'react';
import './App.css';
import {Wrapper} from "./components/Wrapper";
import CitiesPanel from "./components/CitiesPanel";
import {Provider} from "react-redux";
import configureStore from './store/configureStore'
import {PersistGate} from 'redux-persist/integration/react'


const {store, persistor} = configureStore();

function App() {
    return (
        <div>
            <header>
            </header>
            <Wrapper/>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <CitiesPanel/>
                </PersistGate>
            </Provider>


        </div>
    );
}

export default App;


