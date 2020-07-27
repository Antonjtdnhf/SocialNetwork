import React from "react";
import s from "./Post.module.css"
import avaExample from './../../../assets/images/avaExample.jpg'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.user}>
                <img
                    src={avaExample}/>
                <span>You</span>
            </div>
            <div className={s.post_text}>
                <span>{props.message}</span>
            </div>
            <div className={s.like}>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;