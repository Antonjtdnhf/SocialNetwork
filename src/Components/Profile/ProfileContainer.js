import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfileActionCreator} from "../../Redux/profilePageReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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


export default ProfileContainer = connect(mapStateToProps,{ setUserProfileActionCreator } )(ProfileContainer);
