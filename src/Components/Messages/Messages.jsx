import React, {createRef} from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";
import {actionCreatorSendNewMessage, actionCreatorChangeMessageTextArea} from "../../Redux/messgaesPageReducer";



const Messages = (props) => {

    const DialogItem = (props) => {

        return (
            <div className={s.dialog_item}>{props.message}</div>
        )
    };

    const DialogUser = (props) => {

        let path = "/messages/" + props.id;

        return (
            <div className={s.dialog_user}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
    };

    let dialogsElements = props.dialogsUsersData.map((u) => {
            return (
                <DialogUser name={u.name} id={u.id}/>
            )
        }
    );
    debugger
    let messagesElements = props.messagesData.map((m) => {
            return (
                <DialogItem message={m.message} id={m.id}/>
            )
        }
    );

    const cleanMessageTextArea = () => {

    }
    const changeMessageTextArea = (e) => {
        props.changeMessageTextArea( e.target.value )
    }

    const onSendMessageButtonClick = () => {
        props.onSendMessageButtonClick()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog_users}>
                {dialogsElements}
            </div>
            <div className={s.dialog_items}>
                {messagesElements}
                <div className="writeMessages">
                    <textarea onChange={ changeMessageTextArea }
                              value={props.messageTextAreaText}></textarea>
                </div>
                <br/>
                <button onClick={onSendMessageButtonClick}>Send</button>
                <button onClick={cleanMessageTextArea}>Clean</button>

            </div>
        </div>
    )
};

export default Messages;