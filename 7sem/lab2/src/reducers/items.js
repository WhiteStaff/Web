export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS': {
            return state.map((current) => {
                return current.city === action.items.city ?
                    {
                        ...action.items,
                        done: true,
                        error: false
                    }
                    : current;
            });
        }

        case 'ADD_ITEM': {
            var copy = state.slice();
             (copy.push({city: action.item, data: {}, done: false, error: false}));
            return copy;
        }

        case 'DELETE_ITEM': {
            let index = state.findIndex(current => current.city === action.city);
            var copy = state.slice();
            console.log(index);
            copy.splice(index, 1);
            return copy;
        }

        case 'IS_LOADING': {
            return state.map((current) => {
                return current.city === action.city ?
                    {
                        ...current,
                        done: false,
                        error: false
                    }
                    : current;
            });
        }


        case 'ITEMS_HAS_ERRORED': {
            return state.map((current) => {
                return current.city === action.city ?
                    {
                        ...current,
                        error: true
                    }
                    : current;
            });
        }



        default:
            return state;
    }
}

export function newCityValue(state = '', action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            return '';
        }
        case 'CHANGE_INPUT': {
            return action.item
        }


        default:
            return state;
    }
}

export function duplicateHandler(state = false, action)
{
    switch(action.type){
        case 'ERROR':
            return true;
        case 'CHANGE_INPUT':
            return false;
        default:
            return state;
    }
}
