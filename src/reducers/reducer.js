const reducer = (state={
    redVisibility:false,
    greenVisibility:false,
    blueVisibility:false,
}, action) => {
    switch(action.type){
        case "CHANGE_RED_VISIBILITY": {
            return {
                ...state,
                redVisibility: action.redVisibility,
                greenVisibility: false,
                blueVisibility: false
            }
        }
        case "CHANGE_GREEN_VISIBILITY": {
            return {
                ...state,
                redVisibility: false,
                greenVisibility: action.greenVisibility,
                blueVisibility: false
            }
        }
        case "CHANGE_BLUE_VISIBILITY": {
            return {
                ...state,
                redVisibility: false,
                greenVisibility: false,
                blueVisibility: action.blueVisibility
            }
        }
    }
    return state
}
export default reducer;