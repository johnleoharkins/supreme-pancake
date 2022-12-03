import Gallery from "../components/Gallery/Gallery";
import classes from './Home.module.css'
import {useLoaderData} from "react-router";
import {useCallback, useEffect, useState} from "react";
import Overlay from "../components/UI/Overlay";
const Home = () => {
    const [fullsizeGallery, setFullsizeGallery] = useState(false)

    const data = useLoaderData()
    console.log("loader data... ", data)

    const handleKeydown = useCallback((event) => {
        const { key, keyCode } = event;
        if(keyCode === 121){
            setFullsizeGallery(true)
        }else if(keyCode === 27){
            setFullsizeGallery(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown)

        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    }, [handleKeydown])


    const closeFullsizeGallery = () => {
        setFullsizeGallery(false)
    }

    return(
        <div className={classes.container}>
            Home component
            {fullsizeGallery ? (
                <Overlay onClose={closeFullsizeGallery} loaderData={data}>
                </Overlay>) :
                <Gallery loaderData={data} />}
        </div>
    )
}

export default Home;