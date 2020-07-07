import React from "react";
import s from './Users_search.module.css';


const User_search = (props) => {
    if (props.users.length === 0) {
        props.actionCreatorSetUsers(
            [
                {
                    firstName: "Sasha",
                    lastName: "Ivanov",
                    id: "1",
                    followed: true,
                    avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU",
                    status: "Awesome App!",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    firstName: "John",
                    lastName: "Ivanov",
                    id: "2",
                    followed: false,
                    avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU",
                    status: "Awesome App!",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    firstName: "Kate",
                    lastName: "Ivanov",
                    id: "3",
                    followed: false,
                    avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU",
                    status: "Awesome App!",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    firstName: "Tom",
                    lastName: "Ivanov",
                    id: "4",
                    followed: true,
                    avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU",
                    status: "Awesome App!",
                    location: {city: "Minsk", country: "Belarus"}
                }
            ]
        )
    }


    return (
        <div className={s.usersSearch}>
            {props.users.map((user) => {
                return (
                    <div key={user.id}>
                        <div><img src={user.avaUrl} alt="avatar"/></div>
                        <div>{user.status}</div>
                        <div>{user.firstName}</div>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
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