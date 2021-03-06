import React, {createRef} from 'react';
import s from './AddNewPost.module.css';

const AddNewPost = (props) => {


    let text = createRef();
    let addNewPost = () => {
        props.addNewPost();


    };

    let changeTextArea = () => {
        props.changeTextArea(text.current.value);

    }


    return (
        <div className={s.add_new_post}>
            <textarea onChange={ changeTextArea } ref={text} value={props.postTextArea}></textarea>
            <br/>
            <button type="submit" onClick={addNewPost} >Post</button>
            <button type="reset">Reset</button>

        </div>
    )
}

export default AddNewPost;