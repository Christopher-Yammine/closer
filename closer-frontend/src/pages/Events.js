import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useUserStore } from '../store/UserStore'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
const Events = () => {
    const { REACT_APP_BASE_URL } = process.env
    const usertype = useUserStore((state) => state.usertype);
    const currentlocation = useLocation();
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    function filterEvents(locationstring) {
        if (locationstring === "") {
            getEvents();
        }

        setEvents(events.filter(event => event.city.includes(locationstring.charAt(0).toUpperCase() + locationstring.slice(1))));

    }
    function getEvents() {

        let id_category = "";
        id_category = currentlocation.search.split("id=")[1];

        if (id_category === undefined) {
            axios({
                method: "get",
                url: REACT_APP_BASE_URL + "events"
            }).then(function (response) {

                setEvents(response.data.data.events);

            }).catch(function (err) {

            })
        } else {
            axios({
                method: "get",
                url: REACT_APP_BASE_URL + "events/" + id_category
            }).then(function (response) {
                setEvents(response.data.data.events);
                if (response.data.data.events.length === 0) {
                    toast('No events in this category yet')
                }

            }).catch(function (err) {

            })
        }
    }

    useEffect(() => {
        getEvents();
        // eslint-disable-next-line
    }, []);
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
            className='events-section'>
            <div>
                <Navbar usertype={usertype} />
                <div className='searchbar-container'>

                    <div className='searchbar-content'>
                        <div>
                            Find your universe...
                        </div>
                        <div className='searchbar'>

                            <div>
                                <input type="text" placeholder='Location' onChange={(e) => filterEvents(e.currentTarget.value)} />
                            </div>
                            <div className='magnifier'>
                                <img src={require('../assets/magnifier.png')} width={56} alt="" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {isLoading &&
                <div className='spinner-container'>
                    <div className='spinner'></div>
                </div>
            }


            <div className='events-display'>


                {events.map(event => (
                    <div className='event-container' key={event.id}>
                        <div className='event'>
                            <EventCard data={event.cover_photo}
                                title={event.name}
                                id={event.id} />
                        </div>

                    </div>
                ))}




            </div>
            <ToastContainer />

        </motion.div>
    )
}

export default Events