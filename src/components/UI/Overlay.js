import React, {useCallback, useEffect} from "react";
import ReactDOM from "react-dom";
import classes from './Overlay.module.css'
import Gallery from "../Gallery/Gallery";


const Backdrop = (props) => {

    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const Overlay = (props) => {
    // const eleRef = document.getElementById("overlay")
    //     eleRef.className = classes.modal
    return (
        <div >

                { ReactDOM.createPortal(
                    (<div className={classes.modal}>
                        <Gallery loaderData={props.loaderData} />
                        </div>
                    ), document.getElementById("overlay")) }


            { ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("backdrop")) }
        </div>
    )
}





export default Overlay;