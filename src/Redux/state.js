
let state = {
    timelinePage : {
        postsData: [
            {message: "You didn't see anything", likesCount: "15"},
            {message: "react top", likesCount: "13"},
            {message: "i'm impressive", likesCount: "8"},
            {message: "go next", likesCount: "80"},
        ],
    },

    messagesPage : {
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
            {id: 4, message: "Hi Tom!"},
        ]
    }
}

export let addPost = (newPostText) => {

    let newPost = {
        message: newPostText,
        likesCount: 0,
    }
    state.timelinePage.postsData.push(newPost);
};


export default state;