let nextCityId = 0
export const addCity = (text) => {
    return {
        type: 'ADD_CITY',
        id: nextCityId++,
        text
    }
}


export const deleteCity = (id) => {
    return {
        type: 'DELETE_CITY',
        id: nextCityId--,
    }
}
