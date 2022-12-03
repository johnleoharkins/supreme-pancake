import classes from './Root.module.css'
import {Outlet} from "react-router";
import Header from "./components/Header/Header";
import styled from "styled-components";
import eagle612 from "./static/eagle612.jpg"
const Logo = styled.div`
  background-image: url(${eagle612});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: center;
  opacity: 40%;
`

const Root = () => {
    return(
        <div className={classes.layout__gridContainer}>
            <div className={classes.headerContainer}>
                <Header />
            </div>
            <div className={classes.bodyLeftContainer}>
                <Logo />
            </div>
            <div className={classes.bodyCenterContainer}>
                <Outlet />
            </div>
            <div className={classes.bodyRightContainer}></div>
            <div className={classes.footerContainer}></div>
        </div>
    )
}

export default Root;

