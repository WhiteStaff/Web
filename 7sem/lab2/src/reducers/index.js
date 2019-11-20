import { combineReducers } from 'redux';
import {duplicateHandler, items, newCityValue} from './items';

export default combineReducers({
    items,
    newCityValue,
    duplicateHandler
});
