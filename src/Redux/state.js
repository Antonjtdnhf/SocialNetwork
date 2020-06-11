const store = {

    _state : {
        timelinePage: {
            postsData: [
                {postText: "You didn't see anything", likesCount: "15"},
                {postText: "react top", likesCount: "13"},
                {postText: "i'm impressive", likesCount: "8"},
                {postText: "go next", likesCount: "80"}
            ],
            postTextArea: 'Hello!',
        },

        messagesPage: {
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
        }
    },

    getState() {
      return this._state
    },

    dispatch(action) {
        if (action.type === "ADD_NEW_POST") {
            let newPost = {
                postText: this._state.timelinePage.postTextArea,
                likesCount: 0
            }
            this._state.timelinePage.postsData.push(newPost);
            this._state.timelinePage.postTextArea = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === "CHANGE_POST_TEXT_AREA") {
            this._state.timelinePage.postTextArea = action.message;
            this.rerenderEntireTree(store._state);
        } else if (action.type === "SEND_NEW_MESSAGE") {
            let newMessage = {
                message: this._state.messagesPage.messageTextAreaText,
                id : 1
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.messageTextAreaText = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === "CHANGE_TEXT_AREA_POST") {
            this._state.messagesPage.messageTextAreaText = action.message;
            this.rerenderEntireTree(store._state);
        }
    },

    rerenderEntireTree() {
    },

    subscribe (observer) {
        this.rerenderEntireTree = observer;

}

}
export const actionCreatorAddNewPost = () => {
    return { type : "ADD_NEW_POST" }
}

export const actionCreatorChangePostTextArea = (newPostText) => {
    return { type : "CHANGE_POST_TEXT_AREA" , message : newPostText }
}

export const actionCreatorSendNewMessage = () => {
    return { type : "SEND_NEW_MESSAGE" }
}

export const actionCreatorChangeMessageTextArea = (newMessageText) => {
    return { type : "CHANGE_TEXT_AREA_POST" , message : newMessageText }
}

export default store;