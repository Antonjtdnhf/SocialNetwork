import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <a href='/posts'>TimeLine</a>
                </li>
                <li>
                    <a href='profile'>Profile</a>
                </li>
                <li>
                    <a href='/messages'>Messages</a>
                </li>
                <li>
                    <a href='/videos'>Videos</a>
                </li>
                <li>
                    <a href='photos'>Photos</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;