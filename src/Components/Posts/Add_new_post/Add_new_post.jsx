import React, {createRef} from 'react';
import s from './Add_new_post.module.css';

const Add_new_post = (props) => {

    let text = createRef();
    let addPost = () => {
        props.addPost("ADD_NEW_POST");


    };

    let das = () => {
        props.changeTextArea(text.current.value);
        text.current.value = props.postTextArea;
    }


    return (
        <div className={s.add_new_post}>
            <textarea onChange={ das } ref={text} value={props.postTextArea}></textarea>
            <br/>
            <button type="submit" onClick={addPost} >Post</button>
            <button type="reset">Reset</button>

        </div>
    )
}

export default Add_new_post;