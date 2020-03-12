import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to='/posts' activeClassName={s.active}>TimeLine</NavLink>
                </li>
                <li>
                    <NavLink to='profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/videos' activeClassName={s.active}>Videos</NavLink>
                </li>
                <li>
                    <NavLink to='photos' activeClassName={s.active}>Photos</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;