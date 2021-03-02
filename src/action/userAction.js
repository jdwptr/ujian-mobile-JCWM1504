export const loginAction = (username) => {
    return async(dispatch) => {
        try {
            dispatch({
                type: "LOG_IN",
                payload: username
            })
        }
        catch(err) {
            console.log(err)
        }
    }
}

export const logoutAction = () => {
    return async(dispatch) => {
        try {
            dispatch({
                type: 'LOG_OUT'
            })
        }
        catch(err) {
            console.log(err)
        }
    }
}