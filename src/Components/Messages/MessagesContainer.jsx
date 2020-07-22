import React from "react";
import {actionCreatorSendNewMessage, actionCreatorChangeMessageTextArea} from "../../Redux/messgaesPageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";



/*const MessagesContainer = (props) => {


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
};*/

const mapStateToProps = (state) => {
    return {
        dialogsUsersData : state.messagesPage.dialogsUsersData,
        messagesData : state.messagesPage.messagesData,
        messageTextAreaText : state.messagesPage.messageTextAreaText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMessageTextArea : (text) => {
            dispatch(actionCreatorChangeMessageTextArea(text))
        },
        onSendMessageButtonClick : () => {
            dispatch(actionCreatorSendNewMessage())
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;