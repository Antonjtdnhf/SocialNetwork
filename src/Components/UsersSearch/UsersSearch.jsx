import React from "react";
import s from './UsersSearch.module.css';
import avaExample from './../../assets/images/avaExample.jpg'
import {NavLink} from "react-router-dom";

const UsersSearch = (props) => {
    return (
        <div className={s.usersSearch}>
            <div className={s.pages}>
                {props.pages.map(numberOfPage => {
                    return (
                        <span className={numberOfPage === props.currentPage ? s.selected : null}
                              onClick={e => props.onPageChange(+(e.currentTarget.innerHTML))}>{numberOfPage}</span>
                    )
                })}
            </div>
            {props.users.map((user) => {
                return (
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <div><img src={user.photos.small!=null ? user.photos.small : avaExample} alt="avatar"/></div>
                            <div>{user.name}</div>
                        </NavLink>
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
}

export default UsersSearch;