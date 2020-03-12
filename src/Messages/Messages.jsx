import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Dialog_user = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div className={s.dialog_user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialog_item = (props) => {


    return (
        <div className={s.dialog_item}>{props.message}</div>
    )
}


const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_users}>
                <Dialog_user name="Sasha" id="1"/>
                <Dialog_user name="John" id="2"/>
                <Dialog_user name="Kate" id="3"/>
                <Dialog_user name="Tom" id="4"/>
            </div>
            <div className={s.dialog_items}>
                <Dialog_item message="Hi Sasha!"/>
                <Dialog_item message="Hi John!"/>
                <Dialog_item message="Hi Kate!"/>
                <Dialog_item message="Hi Tom!"/>
            </div>
        </div>
    )
}

export default Messages;