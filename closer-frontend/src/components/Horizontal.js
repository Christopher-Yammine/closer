
import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal';

import EventCard from './EventCard';

const HorizontalTrending = () => {
    function getTrendingEvents(){
        let data = new FormData();
        ax
    }
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