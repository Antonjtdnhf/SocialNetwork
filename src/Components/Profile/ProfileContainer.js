import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfileActionCreator} from "../../Redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfileActionCreator(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} a={14} />
        )
    }
}

const mapStateToProps = ( state ) => ({
    profilePage: state.profilePage
})

const WithRouterContainerComponent = withRouter(ProfileContainer);
export default ProfileContainer = connect(mapStateToProps,{ setUserProfileActionCreator } )(WithRouterContainerComponent);
