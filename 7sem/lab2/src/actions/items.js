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

export function duplicate()
{
    return {
        type: 'ERROR'
    }
}

export function doDeleteItem(city) {
    return (dispatch) => {
        dispatch(deleteItem(city));
        dispatch(deleteRemoteItem(city));
    };
}

export function doChangeInput(item) {
    return (dispatch) => {
        dispatch(changeCityInpit(item));
    };
}

export function doAddItem(item, items) {

        let error = false;
        items.map((current) => {
            if (current.city.toLowerCase() === item.toLowerCase()) {
                error = true;
            }
        });
        if (!error) return (dispatch) => {
        dispatch(itemsAddItem(item));
        dispatch(downloadItem(item));
        };
        else  return (dispatch) => dispatch(duplicate());

}

export function itemsFetch() {
    return (dispatch) => {
        fetch(`http://localhost:4000/favourites`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                for (var i = 0; i < response.length; i++) {
                    dispatch(itemsAddItem(response[i].city))
                }
            })
    };
}

export function downloadItem(item) {

    return  () => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:4000/favourites', true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify({"cityname": item}))
    }
}

export function deleteRemoteItem(item)
{
    return  () => {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', 'http://localhost:4000/favourites', true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify({"cityname": item}))
    }
}


export function itemsFetchData(city) {
    return (dispatch) => {

        dispatch(loading(city));

        fetch(`http://localhost:4000/weather?city=${city}`)
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
