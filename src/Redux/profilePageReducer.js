let initialState = {
    userId: 1,
    userProfile: null

}


const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_PROFILE": {
            return ({
                ...state,
                userProfile: {...action.userProfile},
                userId: action.userProfile.userId
            })
        }
        default :
        return state;
    }
}

export const setUserProfileActionCreator = (userProfile) => {
    const action = { type: "SET_USER_PROFILE", userProfile  }
    return action }


export default profilePageReducer