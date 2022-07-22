

import HorizontalScroll from 'react-scroll-horizontal';
import axios from 'axios';
import EventCard from './EventCard';
import { useState, useEffect } from 'react';

const HorizontalTrending = () => {
    const [trendingEvents, setTrendingEvents] = useState([])
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
        <div className="events-container">
            <HorizontalScroll>
                <EventCard data='url' title='test' />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </HorizontalScroll>
        </div>
    )

}

export default HorizontalTrending