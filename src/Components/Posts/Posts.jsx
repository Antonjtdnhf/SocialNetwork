import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import Add_new_post_container from "./Add_new_post/Add_new_post_container";



const Posts = (props) => {

    let postsElements = props.store.getState().timelinePage.postsData.map( (el) => {
        return (
            <Post message={el.postText} likesCount={el.likesCount}/>
        )
    })


    return (
        <div className={s.posts}>
            <Add_new_post_container store={props.store}/>
            {postsElements}
        </div>
    )
}

export default Posts;