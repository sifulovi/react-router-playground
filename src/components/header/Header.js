import React from 'react';
import {Link} from "react-router-dom";
import classes from './header.module.css'

const Header = () => {
    return (
        <>
            <nav className={classes.navContainer}>
                <div className={classes.logo}>
                    <Link to="/">HOME</Link>
                </div>
                <div className={classes.menu}>
                    <Link to="/post">POST</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact-us">CONTACT US</Link>
                    <Link className={classes.get_started} to="/">GET STARTED</Link>
                </div>
            </nav>
        </>
    );
};

export default Header;