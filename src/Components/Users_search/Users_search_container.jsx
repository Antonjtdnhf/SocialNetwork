import React from "react";
import {connect} from "react-redux";
import Users_search from "./Users_search";
import {actionCreatorFollow, actionCreatorSetUsers, actionCreatorUnFollow} from "../../Redux/usersSearchReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersSearch.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreatorFollow: (userId) => {
            dispatch(actionCreatorFollow(userId))
        },
        actionCreatorUnFollow: (userId) => {
            dispatch(actionCreatorUnFollow(userId))
        },
        actionCreatorSetUsers: (users) => {
            dispatch(actionCreatorSetUsers(users))
        }
    }
}

const Users_search_container = connect(mapStateToProps, mapDispatchToProps)(Users_search)

export default Users_search_container;