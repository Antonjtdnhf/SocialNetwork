const messagesPageReducer = ( state , action ) => {
    switch (action.type) {
        case "SEND_NEW_MESSAGE":
            let newMessage = {
                message: state.messageTextAreaText,
                id: 1
            }
            state.messagesData.push(newMessage);
            state.messageTextAreaText = '';
            return state;
        case "CHANGE_MESSAGE_TEXT_AREA":
            state.messageTextAreaText = action.message;
            return state;
        default :
            return state;

    }
    return state;
}

export const actionCreatorSendNewMessage = () => {
    return { type : "SEND_NEW_MESSAGE" }
}

export const actionCreatorChangeMessageTextArea = (newMessageText) => {
    return { type : "CHANGE_MESSAGE_TEXT_AREA" , message : newMessageText }
}

export default messagesPageReducer;