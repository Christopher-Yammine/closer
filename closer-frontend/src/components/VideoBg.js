import React from 'react'
import videoBg from "../assets/bgvideo.mp4";
import Header from './Header';
import Hero from './Hero';
const VideoBg = () => {
    return (
        <div className='videobg'>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <div className='splash'>
                    <div><Header /></div>
                    <div><Hero /></div>
                </div>

            </div>
        </div>
    )
}

export default VideoBg