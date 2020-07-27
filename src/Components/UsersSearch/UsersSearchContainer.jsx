import React from "react";
import {connect} from "react-redux";
import UsersSearch from "./UsersSearch";
import {
    actionCreatorChangeCurrentPage,
    actionCreatorFollow, actionCreatorIsLoading, actionCreatorSetTotalUsersCount,
    actionCreatorSetUsers,
    actionCreatorUnFollow
} from "../../Redux/usersSearchReducer";
import * as axios from "axios";
import preloader from "../../assets/images/preloader.gif";

//-----------------------------------------CONTAINER COMPONENT-----------------------------------------------------
class UsersSearchContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.actionCreatorIsLoading(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numberOfUsersOnOnePage}&page=${this.props.currentPage}`).then((response) => {
                this.props.actionCreatorSetUsers(response.data.items)
                this.props.actionCreatorSetTotalUsersCount(response.data.totalCount)
                this.props.actionCreatorIsLoading(false)
            })
        }
    }

    onPageChange = (pageNumber) => {
        this.props.actionCreatorIsLoading(true)
        this.props.actionCreatorChangeCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numberOfUsersOnOnePage}&page=${pageNumber}`).then((response) => {
            this.props.actionCreatorSetUsers(response.data.items)
            this.props.actionCreatorIsLoading(false)
        })

    }


    render() {
        let numberOfPages = Math.ceil(this.props.numberOfUsers / this.props.numberOfUsersOnOnePage)
        let pages = []
        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(i)
        }
        return (
            <div>
                { this.props.isLoading ? <img src={preloader} alt="loading"/> : null}
                <UsersSearch users={this.props.users}
                             pages={pages}
                             currentPage={this.props.currentPage}
                             onPageChange={this.onPageChange}
                             actionCreatorFollow={this.props.actionCreatorFollow}
                             actionCreatorUnFollow={this.props.actionCreatorUnFollow}
                />
            </div>
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
        isLoading : state.usersSearch.isLoading
    }
}


export default UsersSearchContainer = connect(mapStateToProps,
        {actionCreatorFollow,
        actionCreatorUnFollow,
        actionCreatorSetUsers,
        actionCreatorChangeCurrentPage,
        actionCreatorSetTotalUsersCount,
        actionCreatorIsLoading})(UsersSearchContainer)
