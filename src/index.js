import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import styled from "styled-components";
import classes from "./Root.module.css";

const imageData = (resJson) => {
    return resJson.map((e) => {
        const widthByHeight = e.width / e.height;
        var h = 20;
        var w = widthByHeight * h;

        if (widthByHeight > 1){
            w = 20;
            h = w / widthByHeight;
        }

        if(e.reddit_url.includes("redgif")){
            // console.log("redgif", e)

            const ImageCard = styled.div`
                overflow: hidden;
                border: aliceblue 2px solid;
                border-radius: 8px;
                height: ${h}em;
                width: ${w}em;
                position:relative;
                //padding-bottom: 81.01%
            `;
            const StyledIframe = styled.iframe`
                
                //width: 100%;
                //height: 100%;
                position:absolute;
                top:0;
                left:0;
            `;

            return (
                <ImageCard key={e.id}>
                    <StyledIframe src={e.reddit_url} width={'100%'} height={'100%'} frameBorder='0' scrolling='no' allowFullScreen></StyledIframe>
                </ImageCard>
            )
        }

        const ImageCard = styled.div`
        overflow: hidden;
        border: aliceblue 2px solid;
        border-radius: 8px;
        height: ${h}em;
        width: ${w}em;
        `;

        if(e.content_type === "gif"){
            // console.log("contentType: gif; element: ", e)
            const Image = styled.div`
            background-image: url("${e.reddit_url}");
            background-size: contain;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            `;
            return(
                <ImageCard key={e.id}>
                    <Image />
                </ImageCard>
            )

        }

        if(e.content_type === "gif/mp4" || e.content_type === "gfycat/gif/mp4"){
            // console.log("contentType: gif/mp4; element: ", e)
            return (
                <ImageCard key={e.id}>
                    <video loop autoPlay muted type="video/mp4" src={e.reddit_url} id={`${e.id}/${e.content_type}`} height={'100%'} width={'100%'} />
                </ImageCard>
            )
        }

        const Image = styled.div`
        background-image: url("${e.reddit_url}");
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        `;

        // console.log(e)
        return(
            <ImageCard key={e.id}>
                <Image />
            </ImageCard>
        )
    })
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async (args) => {
                    const res = await fetch('http://localhost:5000/reddit', { method: "GET" })
                    const resJson = await res.json()
                    console.log("loader executed, returning imageData")
                    return imageData(resJson)
                }
            }
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
