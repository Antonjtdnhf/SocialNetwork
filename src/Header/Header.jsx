import React from 'react';
import s from'./Header.module.css';
import Nav from "./Nav/Nav.jsx";

const Header = () => {
    return(
    <header className={s.header}>
        <img
            src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
        <Nav />
    </header>
    );
};

export default Header;