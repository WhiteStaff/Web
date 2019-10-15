const cityReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_CITY":
            return state.concat([action.data]);
        case "DELETE":
            return state.filter(el => el.id !== action.payload.id);
        default:
            return state;
    }
}
export default cityReducer;
