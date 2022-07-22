import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useUserStore } from '../store/UserStore'
import Attendee from '../components/Attendee'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
const Event = () => {
    const usertype = useUserStore((state) => state.usertype);
    const currentlocation = useLocation();
    const [eventInfo, setEventInfo] = useState([]);

    const videoBg = 'http://127.0.0.1:8000/storage/files/zwwpvtuLTPIvWxGrnlUY9kYuzNZvk83TBlxw0Tav.mp4';
    function getEventInfo() {
        let id_event = "";
        id_event = currentlocation.search.split("id=")[1];
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/event/" + id_event
        }).then(function (response) {
            console.log(response);
        })


    }
    useEffect(() => {
        getEventInfo();
    }, [])
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
            <Navbar usertype={usertype} />
            <div className='video-container'>
                <video src={videoBg} controls />
            </div>
            <hr />
            <div className='event-cat-title'>
                <div className='category-name'>
                    Concerts
                </div>
                <div className='event-title'>
                    Drake for the first time in Lebanon
                </div>
                <div className='host-name'>
                    By OVO
                </div>

            </div>
            <hr />
            <div className='datetime-location-container'>
                <div className='datetime-container'>
                    <div>
                        <span className="material-symbols-outlined white-icons">
                            calendar_today
                        </span>
                    </div>
                    <div className='datetime'>
                        Wed, Apr 15, 2022 10:00 PM
                    </div>

                </div>
                <div className='location-container'>
                    <div>
                        <span className="material-symbols-outlined white-icons">
                            location_on
                        </span>
                    </div>
                    <div className='location'>
                        Beirut Waterfront,
                        Beirut
                    </div>

                </div>


            </div>
            <hr />
            <div className='cover-photo'>
                <img src={''} alt='' width="1347px" height="512px"></img>
            </div>
            <div className='attendees-container'>
                <div className='attendees-count'>

                    <span className="material-symbols-outlined grey-icons">
                        person
                    </span>
                    <div className='count-coming'>
                        58192 coming
                    </div>
                </div>
            </div>
            <div className='attendees'>
                <Attendee srcdata='' username='' />
            </div>



        </motion.div>
    )
}

export default Event