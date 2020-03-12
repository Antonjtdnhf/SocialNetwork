import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";


let dialogsUsersData = [
    {name: "Sasha", id: "1"},
    {name: "John", id: "2"},
    {name: "Kate", id: "3"},
    {name: "Tom", id: "4"}
]

let messages = [
    {id: 1, message: "Hi Sasha!"},
    {id: 2, message: "Hi John!"},
    {id: 3, message: "Hi Kate!"},
    {id: 4, message: "Hi Tom!"},
]


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


let dialogsElements = dialogsUsersData.map((u) => {
        return (<Dialog_user name={u.name} id={u.id}/>)
    }
);
let messagesElements = messages.map((m) => {
        return (
            <Dialog_item message={m.message} id={m.id}/>
        )
    }
)

const Messages = (props) => {
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