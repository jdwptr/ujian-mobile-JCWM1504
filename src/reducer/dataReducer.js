const INITIAL_STATE = {
    negara: {},
}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                negara: action.payload
            }
        default:
            return state
    }
}

export default dataReducer