import React from 'react'
import EventCard from '../components/EventCard'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useUserStore } from '../store/UserStore'
const Events = () => {
    const usertype = useUserStore((state) => state.usertype);
    const navigate = useNavigate();
    function redirect() {
        navigate("/event");
    }
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
            className='events-section'>
            <div>
                <Navbar usertype={usertype} />
                <SearchBar />
            </div>
            <div className='events-display'>
                <div className='event-container' >
                    <div className='event' onClick={redirect}>
                        <EventCard title="event 1" />
                    </div>

                </div>
                <div className='event-container'>
                    <EventCard title="event 2" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 3" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 4" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 1" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 2" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 3" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 4" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 1" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 2" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 3" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 4" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 1" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 2" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 3" />
                </div>
                <div className='event-container'>
                    <EventCard title="event 4" />
                </div>



            </div>


        </motion.div>
    )
}

export default Events