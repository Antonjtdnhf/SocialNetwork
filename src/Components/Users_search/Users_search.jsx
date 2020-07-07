import React from "react";
import s from './Users_search.module.css';
import * as axios from "axios";


const User_search = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( (response) => {
            props.actionCreatorSetUsers(response.data.items)

        })
        console.log(props.users)

    }


    return (
        <div className={s.usersSearch}>
            {props.users.map((user) => {
                return (
                    <div >
                        <div><img  alt="avatar"/></div>
                        <div>{user.name}</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        {(user.followed) ? <button onClick={() => {
                            props.actionCreatorFollow(user.id)
                        }}>Follow</button> : <button onClick={() => {
                            props.actionCreatorUnFollow(user.id)
                        }}>UnFollow</button>}
                    </div>
                )
            })}
        </div>
    )
};

export default User_search;