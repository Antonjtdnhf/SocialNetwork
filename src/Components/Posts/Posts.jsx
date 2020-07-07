import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import Add_new_post from "./Add_new_post/Add_new_post";



const Posts = (props) => {
    let postsElements = props.postsData.map( (el) => {
        return (
            <Post message={el.postText} likesCount={el.likesCount}/>
        )
    })


    return (
        <div className={s.posts}>
            <Add_new_post addNewPost={props.addNewPost}
                          changeTextArea={props.changeTextArea}
                          postTextArea={props.postTextArea}/>
            {postsElements}
        </div>
    )
}

export default Posts;