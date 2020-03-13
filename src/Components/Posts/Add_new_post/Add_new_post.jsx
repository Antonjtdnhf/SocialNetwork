import React, {createRef} from 'react';
import s from "./Add_new_post.module.css";

const Add_new_post = () => {

    let newPostText = createRef();
    let addNewPostElement = () => {
        alert(newPostText.current.value);
    };


    return (
        <div className={s.add_new_post}>
            <textarea ref={newPostText}></textarea>
            <br/>
            <button type="submit" onClick={addNewPostElement} >Post</button>
            <button type="reset">Reset</button>

        </div>
    )
}

export default Add_new_post;