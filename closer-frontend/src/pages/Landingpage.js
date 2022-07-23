import React from 'react'
import videoBg from "../assets/bgvideo.mp4";
import Navbar from '../components/Navbar';
import { useUserStore } from '../store/UserStore';
import HorizontalCategory from '../components/Horizontal';
import HorizontalScroll from 'react-scroll-horizontal';
import axios from 'axios';
import EventCard from '../components/EventCard';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
const Landingpage = () => {
    const usertype = useUserStore((state) => state.usertype);
    const [trendingEvents, setTrendingEvents] = useState([]);

    function filterEvents(locationstring) {
        if (locationstring === "") {
            getTrendingEvents();
        }
        setTrendingEvents(trendingEvents.filter(event => event.city.includes(locationstring)));

    }
    function getTrendingEvents() {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/trendingEvents",
        }).then(function (response) {
            setTrendingEvents(response.data.data.trending);

        })
    }
    useEffect(() => { getTrendingEvents() }, [])
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className='videobg'>
            <div className="overlay">
                <Navbar usertype={usertype} />
                <div className='searchbar-container'>

                    <div className='searchbar-content'>
                        <div>
                            Find your universe...
                        </div>
                        <div className='searchbar'>

                            <div>
                                <input type="text" placeholder='Location' onChange={(e) => { filterEvents(e.currentTarget.value) }} />
                            </div>
                            <div className='magnifier'>
                                <img src={require('../assets/magnifier.png')} width={56} alt="" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <video src={videoBg} autoPlay loop muted />
            <div className='trending-events'>
                <div className='trending-title'>
                    Trending events
                </div>
                <div>
                    <div className="events-container">
                        <HorizontalScroll>
                            {trendingEvents.filter(event =>
                                event.ratio > 0.7).filter(event => event.ratio < 1).map(filteredEvent =>
                                (<EventCard data={filteredEvent.cover_photo}
                                    title={filteredEvent.name}
                                    key={filteredEvent.id} id={filteredEvent.id} />))}
                        </HorizontalScroll>

                    </div>
                </div>
                <div className='trending-title'>
                    Categories
                </div>
                <div>
                    <HorizontalCategory />
                </div>
            </div>

        </motion.div>
    )
}

export default Landingpage