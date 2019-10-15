const cityReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_CITY":
            return state.concat([action.data]);
        default:
            return state;
    }
}
export default cityReducer;
