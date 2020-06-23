import React from 'react';
import {actionCreatorAddNewPost, actionCreatorChangePostTextArea} from "../../../Redux/timelinePageReducer";
import Add_new_post from "./Add_new_post";

const Add_new_post_container = (props) => {



    let addNewPost = () => {
        props.store.dispatch( actionCreatorAddNewPost() );


    };

    let changeTextArea = (text) => {
        props.store.dispatch( actionCreatorChangePostTextArea(text) );
        text = props.store.getState().timelinePage.postTextArea;
    }


    return (
        <Add_new_post changeTextArea={ changeTextArea }
                      addNewPost={ addNewPost }
                      postTextArea={ props.store.getState().timelinePage.postTextArea }/>
    )
}

export default Add_new_post_container;