import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";


const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.dialog_users}>
                <div className={s.dialog_user}>
                    <NavLink to="/messages/1">Sasha</NavLink>
                </div>
                <div className={s.dialog_user}>
                    <NavLink to="/messages/2">John</NavLink>
                </div>
                <div className={s.dialog_user}>
                    <NavLink to="/messages/3">Kate</NavLink>
                </div>
                <div className={s.dialog_user}>
                    <NavLink to="/messages/4">Tom</NavLink>
                </div>
            </div>
            <div className={s.dialog_items}>
                <div className={s.dialog_item}>Hi Sasha!</div>
                <div className={s.dialog_item}>Hi John!</div>
                <div className={s.dialog_item}>Hi Kate!</div>
                <div className={s.dialog_item}>Hi Tom!</div>
            </div>
        </div>
    )
}

export default Messages;