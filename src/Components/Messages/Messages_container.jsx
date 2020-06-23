import React from "react";
import {actionCreatorSendNewMessage, actionCreatorChangeMessageTextArea} from "../../Redux/messgaesPageReducer";
import Messages from "./Messages";



const Messages_container = (props) => {


    const cleanMessageTextArea = () => {

    }
    const changeMessageTextArea = (text) => {
        props.store.dispatch(actionCreatorChangeMessageTextArea( text ))
    }

    const onSendMessageButtonClick = () => {
        props.store.dispatch(actionCreatorSendNewMessage())
    }


    return (
        <Messages changeMessageTextArea={changeMessageTextArea}
                  onSendMessageButtonClick={onSendMessageButtonClick}
                  dialogsUsersData={props.store.getState().messagesPage.dialogsUsersData}
                  messagesData={props.store.getState().messagesPage.messagesData}
                  messageTextAreaText={props.store.getState().messagesPage.messageTextAreaText}/>
    )
};

export default Messages_container;