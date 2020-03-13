import React from 'react';
import s from "./Add_new_post.module.css";

const Add_new_post = () => {
    return (
        <div className={s.add_new_post}>
            <input/>
            <br/>
            <button type="submit" >Post</button>
            <button type="reset">Reset</button>

        </div>
    )
}

export default Add_new_post;