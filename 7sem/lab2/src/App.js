import React from 'react';
//import './App.css';
import {Wrapper} from "./components/Wrapper";
import CitiesPanel from "./components/CitiesPanel";
import {Provider} from "react-redux";
import {createStore} from "redux";
import cityReducer from "./reducer/reducer";


const saveState = (state) => {
    try {
        // Convert the state to a JSON string
        const serialisedState = JSON.stringify(state);

        // Save the serialised state to localStorage against the key 'app_state'
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        // Log errors here, or ignore
    }
};
const loadState = () => {
    try {
        // Load the data saved in localStorage, against the key 'app_state'
        const serialisedState = window.localStorage.getItem('app_state');

        // Passing undefined to createStore will result in our app getting the default state
        // If no data is saved, return undefined
        if (!serialisedState) return undefined;

        // De-serialise the saved state, and return it.
        return JSON.parse(serialisedState);
    } catch (err) {
        // Return undefined if localStorage is not available,
        // or data could not be de-serialised,
        // or there was some other error
        return undefined;
    }
};

/**
 * This is where you create the app store
 */
const oldState = loadState();
const store = createStore(cityReducer, oldState);
store.subscribe(() => {
    saveState(store.getState());
});


function App() {
    return (
        <div>
            <header>
            </header>
            <Wrapper/>
            <Provider store={store}> <CitiesPanel/></Provider>


        </div>
    );
}

export default App;

