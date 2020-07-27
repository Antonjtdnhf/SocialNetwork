import React from 'react';
import preloader from "./../../assets/images/preloader.gif";

const Profile = (props) => {
    console.log(props)
    if (!props.profilePage.userProfile) {
        return (<div><img src={preloader} alt="loading" /></div>)
    }
    return (
        <div>
            <span>{props.profilePage.userProfile.aboutMe}</span>
            <img src={!props.profilePage.userProfile.photos.large ? null : props.profilePage.userProfile.photos.large} alt="avatar" />
        </div>
    )
}

export default Profile;