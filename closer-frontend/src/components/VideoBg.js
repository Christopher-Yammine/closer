import React from 'react'
import videoBg from "../assets/bgvideo.mp4";
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import { useUserStore } from '../store/UserStore';
const VideoBg = () => {
    const usertype = useUserStore((state) => state.usertype);
    return (
        <div className='videobg'>
            <div className="overlay">
                <Navbar usertype={usertype} />
                <SearchBar />
            </div>
            <video src={videoBg} autoPlay loop muted />

        </div>
    )
}

export default VideoBg