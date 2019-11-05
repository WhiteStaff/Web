export function itemsHasErrored(city) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        city
    };
}

export function itemsFetchDataSuccess(items, city) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: {
            city: city,
            data: items
        }
    };
}

export function itemsAddItem(item) {
    return {
        type: 'ADD_ITEM',
        item
    };
}

export function changeCityInpit(item) {
    return {
        type: 'CHANGE_INPUT',
        item
    };
}

export function deleteItem(city) {
    return {
        type: 'DELETE_ITEM',
        city
    };
}

export function loading(city) {
    return {
        type: 'IS_LOADING',
        city
    };
}

export function doDeleteItem(city) {
    return (dispatch) => {
        dispatch(deleteItem(city));
    };
}

export function doChangeInput(item) {
    return (dispatch) => {
        dispatch(changeCityInpit(item));
    };
}

export function doAddItem(item) {
    return (dispatch) => {
        dispatch(itemsAddItem(item));
    };
}


export function itemsFetchData(city) {
    return (dispatch) => {
        dispatch(loading(city));
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e19bb27bd5e717bac388dc0c1827b17`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => dispatch(itemsFetchDataSuccess(response, city)))
            .catch(() => dispatch(itemsHasErrored(city)));
    };

}
