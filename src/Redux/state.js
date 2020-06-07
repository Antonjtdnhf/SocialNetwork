const store = {

    _state : {
        timelinePage: {
            postsData: [
                {message: "You didn't see anything", likesCount: "15"},
                {message: "react top", likesCount: "13"},
                {message: "i'm impressive", likesCount: "8"},
                {message: "go next", likesCount: "80"}
            ],
            postTextArea: 'asdf',
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
            ]
        }
    },

    getState() {
      return this._state
    },

    dispatch(action) {
        if (action === "ADD_NEW_POST") {
            let newPost = {
                message: this._state.timelinePage.postTextArea,
                likesCount: 0
            }
            this._state.timelinePage.postsData.push(newPost);
            this._state.timelinePage.postTextArea = '';
            this.rerenderEntireTree(this._state);
        } else if (action === "CHANGE_TEXT_AREA") {

        }
    },

    rerenderEntireTree() {
    },


    changeTextArea (message) {

    },

    subscribe (observer) {
        this.rerenderEntireTree = observer;
    }
}
export default store;