import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useUserStore } from '../store/UserStore'
import Attendee from '../components/Attendee'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import PageHeading from '../components/PageHeading'

const Event = () => {
    const usertype = useUserStore((state) => state.usertype);
    const user_token = useUserStore((state) => state.token);
    const currentlocation = useLocation();
    const [eventInfo, setEventInfo] = useState([]);
    const [date, setdate] = useState([]);
    const [finaldatefr, setfinaldate] = useState('');
    const [attendees, setAttendees] = useState([]);
    const [attendeesCount, setAttendeesCount] = useState('');

    let id_event = '';
    id_event = currentlocation.search.split("id=")[1];
    function showAttendees() {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/attendeesByEvent/" + id_event
        }).then(function (response) {
            setAttendees(response.data.data.all_attendees)
            setAttendeesCount(response.data.count.attendees_count)
        }).catch(function (err) {
            console.log(err);
        })
    }

    function reserveSpot() {

        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/addAttendee/" + id_event,
            headers: headers
        }).then(function (response) {
            toast(response.data.data);
            showAttendees();
        }).catch(function (err) {
            console.log(err);
            toast("Make sure you are logged in order to reserve a spot")
        })

    }
    function showDate() {

        let finaldate = '';
        let date1 = date.split(' ');
        let date2 = date1[0].split('-');
        let time = date1[1].split(':');
        let newdate = new Date(date2[0], date2[1] - 1, date2[2], time[0], time[1], '0', '0');
        finaldate = newdate.toString().split("GMT");
        setfinaldate(finaldate[0].toString())

    }
    function getEventInfo() {

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
        showDate()
    }, 10);
    useEffect(() => {
        getEventInfo();
        showAttendees();
    }, [])

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
            <Navbar usertype={usertype} />
            <PageHeading text="Event info" />
            {eventInfo.map(eventinfo => (
                <div key={eventinfo.id}><div className='video-container'>
                    <video src={eventinfo.video_url} controls />
                </div>

                    <hr />
                    <div className='event-cat-title'>
                        <div className='category-name'>
                            {eventinfo.cat_name}
                        </div>
                        <div className='event-title'>
                            {eventinfo.description}
                        </div>
                        <div className='host-name'>
                            By {eventinfo.first_name} {eventinfo.last_name}
                        </div>

                    </div>
                    <hr />
                    <div className='cover-photo'>
                        <img src={eventinfo.banner_photo} alt='' width="1347px" height="550px"></img>
                    </div>
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
                                {eventinfo.city}
                            </div>

                        </div>


                    </div>
                    <div className='attendees-container'>
                        <div className='attendees-count'>

                            <span className="material-symbols-outlined grey-icons">
                                person
                            </span>
                            <div className='count-coming'>
                                {attendeesCount} coming
                            </div>
                        </div>
                    </div>

                </div>
            ))}
            <div className='attendees'>
                {attendees.map(attendee => (

                    <Attendee key={attendee.id} srcdata={attendee.profile_picture} username={attendee.username} />
                ))}
            </div>





            <div className='btn-reserve-container'>
                <button type='button' className='btn-reserve' onClick={reserveSpot} >Reserve your spot</button>
            </div>
            <ToastContainer />
        </motion.div>
    )
}

export default Event