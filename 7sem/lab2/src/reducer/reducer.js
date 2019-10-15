const cityReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CITY":
            return state.concat([action.data]);
        case "DELETE_CITY":
            return state.filter(el => el.id !== action.data.id);
        default:
            return state;
    }
}
export default cityReducer;
