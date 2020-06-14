let initialState = {
        postsData: [
            {postText: "You didn't see anything", likesCount: "15"},
            {postText: "react top", likesCount: "13"},
            {postText: "i'm impressive", likesCount: "8"},
            {postText: "go next", likesCount: "80"}
        ],
        postTextArea: 'Hello!',
}

const timelinePageReducer = ( state = initialState , action ) => {
        switch (action.type) {
            case "ADD_NEW_POST" :
                let newPost = {
                    postText: state.postTextArea,
                    likesCount: 0
                }
                state.postsData.push(newPost);
                state.postTextArea = '';
                return state;
            case "CHANGE_POST_TEXT_AREA" :
                state.postTextArea = action.message;
                return state;
            default :
                return state;
        }


}

export const actionCreatorAddNewPost = () => {
    return { type : "ADD_NEW_POST" }
}

export const actionCreatorChangePostTextArea = (newPostText) => {
    return { type : "CHANGE_POST_TEXT_AREA" , message : newPostText }
}

export default timelinePageReducer;