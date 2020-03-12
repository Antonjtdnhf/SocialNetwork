import React from 'react';
import s from './Posts.module.css';
import Add_new_post from "./Add_new_post/Add_new_post";
import Post from './Post/Post.jsx';


let postsData = [
   { message : "You didn't see anything", likesCount : "15"},
   { message : "react top", likesCount : "13"},
   { message : "i'm impressive", likesCount : "8"},
   { message : "go next", likesCount : "80"},
]

let postsElements = postsData.map( (p) => {
    return (
        <Post message={p.message} likesCount={p.likesCount}/>
    )
})


const Posts = () => {
    return (
        <div className={s.posts}>
            <Add_new_post/>
            {postsElements}
        </div>
    );
}

export default Posts;