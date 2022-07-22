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
                <div className='searchbar-container'>

                    <div className='searchbar-content'>
                        <div>
                            Find your universe...
                        </div>
                        <div className='searchbar'>

                            <div>
                                <input type="text" placeholder='Date | Location' />
                            </div>
                            <div className='magnifier'>
                                <img src={require('../assets/magnifier.png')} width={56} alt="" onClick={console.log("hello")} />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <video src={videoBg} autoPlay loop muted />

        </div>
    )
}

export default VideoBg