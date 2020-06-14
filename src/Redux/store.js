import messagesPageReducer from "./messgaesPageReducer";
import timelinePageReducer from "./timelinePageReducer";

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
        this._state.messagesPage = messagesPageReducer( this._state.messagesPage , action );
        this._state.timelinePage = timelinePageReducer( this._state.timelinePage , action );

        this.rerenderEntireTree(store._state);

    },

    rerenderEntireTree() {
    },

    subscribe (observer) {
        this.rerenderEntireTree = observer;

}

}



export default store;