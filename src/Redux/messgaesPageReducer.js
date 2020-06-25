let initialState = {
        dialogsUsersData: [
            {name: "Sasha", id: "1"},
            {name: "John", id: "2"},
            {name: "Kate", id: "3"},
            {name: "Tom", id: "4"}
        ],

        messagesData: [
            {id: 1, message: "Hi Sasha!"},
            {id: 2, message: "Hi John!"},
            {id: 3, message: "Hi Kate!"},
            {id: 4, message: "Hi Tom!"}
        ],
        messageTextAreaText : 'Hello!'
};

const messagesPageReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case "SEND_NEW_MESSAGE":

            let newMessage = {
                message: state.messageTextAreaText,
                id: 1
            }
            return {
            ...state,
            messagesData : [...state.messagesData, newMessage],
            messageTextAreaText : ''
            }
        case "CHANGE_MESSAGE_TEXT_AREA":
            return {
            ...state,
            messageTextAreaText : action.message
        }
        default :
            return state;
    }
}

export const actionCreatorSendNewMessage = () => {
    return { type : "SEND_NEW_MESSAGE" }
}

export const actionCreatorChangeMessageTextArea = (newMessageText) => {
    return { type : "CHANGE_MESSAGE_TEXT_AREA" , message : newMessageText }
}

export default messagesPageReducer;