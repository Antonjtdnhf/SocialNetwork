import React from 'react';
import s from './Posts.module.css';
import Add_new_post from "./Add_new_post/Add_new_post";
import Post from './Post/Post.jsx';

const Posts = () => {
    return (
        <div className={s.posts}>
            <Add_new_post/>
            <Post message="You didn't see anything" likesCount="15"/>
            <Post message="react top" likesCount="13"/>
            <Post message="i'm impressive" likesCount="8"/>
            <Post message="go next" likesCount="80"/>
        </div>
    );
}

export default Posts;