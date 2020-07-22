import React from "react";
import {connect} from "react-redux";
import UsersSearch from "./UsersSearch";
import {
    actionCreatorChangeCurrentPage,
    actionCreatorFollow, actionCreatorSetTotalUsersCount,
    actionCreatorSetUsers,
    actionCreatorUnFollow
} from "../../Redux/usersSearchReducer";
import * as axios from "axios";

//-----------------------------------------CONTAINER COMPONENT-----------------------------------------------------
class UserSearchContainerComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numberOfUsersOnOnePage}&page=${this.props.currentPage}`).then((response) => {
                this.props.actionCreatorSetUsers(response.data.items)
                this.props.actionCreatorSetTotalUsersCount(response.data.totalCount)
            })
        }
    }

    onPageChange = (pageNumber) => {
        this.props.actionCreatorChangeCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numberOfUsersOnOnePage}&page=${pageNumber}`).then((response) => {
            this.props.actionCreatorSetUsers(response.data.items)
        })
    }


    render() {
        let numberOfPages = Math.ceil(this.props.numberOfUsers / this.props.numberOfUsersOnOnePage)
        let pages = []
        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(i)
        }

        return (
            <UsersSearch users={this.props.users}
                         pages={pages}
                         currentPage={this.props.currentPage}
                         onPageChange={this.onPageChange}
                         actionCreatorFollow={this.props.actionCreatorFollow}
                         actionCreatorUnFollow={this.props.actionCreatorUnFollow}
            />
        )
    }
};

//-----------------------------------------------CONNECT PROPERTIES-----------------------------------------------------------------

const mapStateToProps = (state) => {
    return {
        users: state.usersSearch.users,
        numberOfUsers: state.usersSearch.numberOfUsers,
        numberOfUsersOnOnePage: state.usersSearch.numberOfUsersOnOnePage,
        currentPage: state.usersSearch.currentPage,
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
        },
        actionCreatorChangeCurrentPage: (currentPage) => {
            dispatch(actionCreatorChangeCurrentPage(currentPage))
        },
        actionCreatorSetTotalUsersCount: (totalUsersCount) => {
            dispatch(actionCreatorSetTotalUsersCount(totalUsersCount))
        }
    }
}

const UsersSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UserSearchContainerComponent)
export default UsersSearchContainer;