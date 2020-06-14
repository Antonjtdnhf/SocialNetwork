const timelinePageReducer = ( state , action ) => {
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
        }
    return state;

}

export const actionCreatorAddNewPost = () => {
    return { type : "ADD_NEW_POST" }
}

export const actionCreatorChangePostTextArea = (newPostText) => {
    return { type : "CHANGE_POST_TEXT_AREA" , message : newPostText }
}

export default timelinePageReducer;