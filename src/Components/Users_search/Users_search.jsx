import React from "react";
import s from './Users_search.module.css';
import * as axios from "axios";


class User_search extends React.Component {
    componentDidMount() {
            if (this.props.users.length === 0) {
                axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
                    this.props.actionCreatorSetUsers(response.data.items)
                    console.log("getusers")
                })
            }
    }



    render() {

        return (
            <div className={s.usersSearch}>
                {this.props.users.map((user) => {
                    return (
                        <div>
                            <div><img alt="avatar"/></div>
                            <div>{user.name}</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            {(user.followed) ? <button onClick={() => {
                                this.props.actionCreatorFollow(user.id)
                            }}>Follow</button> : <button onClick={() => {
                                this.props.actionCreatorUnFollow(user.id)
                            }}>UnFollow</button>}
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default User_search;