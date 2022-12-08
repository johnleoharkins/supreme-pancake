import Gallery from "../components/Gallery/Gallery";
import classes from './Home.module.css'
import {useLoaderData} from "react-router";
import {useCallback, useEffect, useState} from "react";
import Overlay from "../components/UI/Overlay";
const Home = () => {
    const [fullsizeGallery, setFullsizeGallery] = useState(false)
    const [imageData, setImageData] = useState([])
    const data = useLoaderData()

    useEffect(() => {
        if(imageData.length !== data.length){
            setImageData(data)
        }

    }, [data])

    useEffect(() => {
        console.log("[Home/useEffect] registering 'keydown' event listener")
        const handleKeydown = (event) => {
            const { key, keyCode } = event;
            if(keyCode === 121){
                setFullsizeGallery(true)
            }else if(keyCode === 27){
                setFullsizeGallery(false)
            }
        }

        window.addEventListener('keydown', handleKeydown)

        return () => {
            console.log("[Home/useEffect] cleanup fn. remove 'keydown' event listener")
            window.removeEventListener('keydown', handleKeydown)
        }
    })
    const closeFullsizeGallery = () => {
        setFullsizeGallery(false)
    }

    const overlay = useCallback(() => {
        return (
            <Overlay onClose={closeFullsizeGallery} loaderData={imageData} />
        )
    },[imageData])

    const gallery = useCallback(() => {
        return (
            <Gallery loaderData={imageData} />
        )
    }, [imageData])

    return(
        <div className={classes.container}>
            Home component
            {fullsizeGallery ? overlay() : gallery() }
        </div>
    )
}

export default Home;