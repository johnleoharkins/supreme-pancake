import React, {useEffect} from "react";
import classes from './Gallery.module.css';
import reddit from '../../REDDIT_DATA.json'
import styled from "styled-components";


const Gallery = ({ loaderData }) => {


    return (
        <div className={classes.container}>
            {loaderData}
        </div>
    )
};

export default React.memo(Gallery);