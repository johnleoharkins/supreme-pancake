import React from "react";
import classes from "./Header.module.css"
import Navigation from "../Navigation/Navigation";
const Header = () => {
    return (
        <React.Fragment >
            <div className={classes.header__container}>
                <span>the header</span>
            </div>
            <Navigation />
        </React.Fragment>
    )
}

export default Header;