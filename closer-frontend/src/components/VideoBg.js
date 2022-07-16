import React from 'react'
import videoBg from "../assets/bgvideo.mp4";
import Navbar from './Navbar';
const VideoBg = () => {
    return (
        <div className='videobg'>
            <div className="overlay">
                <Navbar id_usertype={1} />
            </div>
            <video src={videoBg} autoPlay loop muted />

        </div>
    )
}

export default VideoBg