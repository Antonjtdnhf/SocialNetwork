import React, {createRef} from 'react';
import s from "./Add_new_post.module.css";

const Add_new_post = (props) => {

    let newPostText = createRef();
    let addPost = () => {
        props.addPost(newPostText.current.value);
    };


    return (
        <div className={s.add_new_post}>
            <textarea ref={newPostText}></textarea>
            <br/>
            <button type="submit" onClick={addPost} >Post</button>
            <button type="reset">Reset</button>

        </div>
    )
}

export default Add_new_post;