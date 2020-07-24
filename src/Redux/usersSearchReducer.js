let initialState = {
    users: [
        /*{
            firstName: "Sasha",
            lastName: "Ivanov",
            id: "1",
            followed: true,
            avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU",
            status: "Awesome App!",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            firstName: "John",
            lastName: "Ivanov",
            id: "2",
            followed: false,
            avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU",
            status: "Awesome App!",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            firstName: "Kate",
            lastName: "Ivanov",
            id: "3",
            followed: false,
            avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU",
            status: "Awesome App!",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            firstName: "Tom",
            lastName: "Ivanov",
            id: "4",
            followed: true,
            avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU",
            status: "Awesome App!",
            location: {city: "Minsk", country: "Belarus"}
        }*/
    ],
    numberOfUsers: 0,
    numberOfUsersOnOnePage: 5,
    currentPage: 1,
    isLoading: true


};

const usersSearchReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FOLLOW": {
            return ({
                    ...state,
                    users: state.users.map((user) => {
                        if (action.id === user.id) {
                            return {...user, followed: false}
                        }
                        return user;
                    })
                }
            )
        }
        case "UNFOLLOW": {
            return ({
                    ...state,
                    users: state.users.map((user) => {
                        if (action.id === user.id) {
                            return {...user, followed: true}
                        }
                        return user;
                    })
                }
            )
        }
        case "SET_USERS": {

            return ({
                ...state,
                users: [...action.users]
            })

        }
        case "SET_TOTAL_USERS_COUNT": {

            return ({
                ...state,
                numberOfUsers: action.totalUsersCount
            })

        }
        case "CHANGE_CURRENT_PAGE": {
            return ({
                ...state,
                currentPage: action.currentPage
            })

        }
        case "IS_LOADING": {
            return   ({
                ...state,
                isLoading: action.isLoading
            })
        }
        default :
            return state;
    }
}

export const actionCreatorFollow = (userId) => {
    return {type: "FOLLOW", id: userId}
}

export const actionCreatorUnFollow = (userId) => {
    return {type: "UNFOLLOW", id: userId}
}
export const actionCreatorSetUsers = (users ) => {
    return {type: "SET_USERS", users }
}
export const actionCreatorChangeCurrentPage = (currentPage) => {
    return {type: "CHANGE_CURRENT_PAGE", currentPage}
}
export const actionCreatorSetTotalUsersCount = (totalUsersCount) => {
        return {type: "SET_TOTAL_USERS_COUNT", totalUsersCount}
}
export const actionCreatorIsLoading = (isLoading) => {
    return { type: "IS_LOADING" , isLoading}
}

export default usersSearchReducer;