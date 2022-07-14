import React from 'react'
import videoBg from "../assets/bgvideo.mp4";
import GetHosted from './GetHosted';
import Header from './Header';
import Hero from './Hero';
const VideoBg = () => {
    return (
        <div className='videobg'>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <GetHosted/>

            </div>
        </div>
    )
}

export default VideoBg