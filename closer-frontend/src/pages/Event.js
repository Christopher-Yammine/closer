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
    const [date, setdate] = useState([]);
    const [finaldatefr, setfinaldate] = useState('');

    function show() {
        console.log(eventInfo);
        console.log(date);
        let finaldate = '';
        let date1 = date.split(' ');
        let date2 = date1[0].split('-');
        let time = date1[1].split(':')
        let year = date2[0].split('20')
        let newdate = new Date(date2[0], date2[1] - 1, date2[2], time[0], time[1], time[2], '0');
        finaldate = newdate.toString().split("GMT");
        setfinaldate(finaldate[0].toString())

    }
    function getEventInfo() {
        let id_event = "";
        id_event = currentlocation.search.split("id=")[1];
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/event/" + id_event
        }).then(function (response) {
            setEventInfo(response.data.data.event);
            setdate(response.data.data.event[0].date);


        }).catch(function (err) {
            console.log(err);
        })


    }
    setTimeout(() => {
        show()
    }, 50);
    useEffect(() => {
        getEventInfo();
    }, [])

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
            <Navbar usertype={usertype} />
            {eventInfo.map(eventinfo => (
                <div key={eventinfo.id}><div className='video-container'>
                    <video src={eventinfo.video_url} controls />
                </div>

                    <hr />
                    <div className='event-cat-title'>
                        <div className='category-name' onClick={show}>
                            {eventinfo.cat_name}
                        </div>
                        <div className='event-title'>
                            {eventinfo.description}
                        </div>
                        <div className='host-name'>
                            By {eventinfo.first_name} {eventinfo.last_name}
                        </div>

                    </div>
                    <hr /></div>))}



            <div className='datetime-location-container'>
                <div className='datetime-container'>
                    <div>
                        <span className="material-symbols-outlined white-icons">
                            calendar_today
                        </span>
                    </div>
                    <div className='datetime'>
                        {finaldatefr}
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