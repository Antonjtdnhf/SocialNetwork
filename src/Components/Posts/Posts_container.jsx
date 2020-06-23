import React from 'react';
import {actionCreatorAddNewPost, actionCreatorChangePostTextArea} from "../../Redux/timelinePageReducer";
import {connect} from "react-redux";
import Posts from "./Posts";



/*const Posts_container = (props) => {

    let postsElements = props.store.getState().timelinePage.postsData.map( (el) => {
        return (
            <Post message={el.postText} likesCount={el.likesCount}/>
        )
    })


    return (
        <Add_new_post_container />,
        {postsElements}
    )
}*/

const mapStateToProps = (state) => {
    return {
        postTextArea: state.timelinePage.postTextArea,
        postsData: state.timelinePage.postsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTextArea : (text) => {
            dispatch( actionCreatorChangePostTextArea(text) );
        },
        addNewPost : () => {
            dispatch( actionCreatorAddNewPost() );

        }
    }
}

const Posts_container = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default Posts_container;