import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";


const Dialog_item = (props) => {

    return (
        <div className={s.dialog_item}>{props.message}</div>
    )
}

const Dialog_user = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div className={s.dialog_user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Messages = (props) => {


    let dialogsElements = props.dialogsUsersData.map((u) => {
            return (
                <Dialog_user name={u.name} id={u.id}/>
            )
        }
    );
    let messagesElements = props.messagesData.map((m) => {
            return (
                <Dialog_item message={m.message} id={m.id}/>
            )
        }
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_users}>
                {dialogsElements}

            </div>
            <div className={s.dialog_items}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;