
import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal';

import EventCard from './EventCard';
const HorizontalTrending = () => {

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