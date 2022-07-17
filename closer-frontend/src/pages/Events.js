import React from 'react'
import EventCard from '../components/EventCard'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

const Events = () => {
    return (
        <div className='events-section'>
            <div>
                <Navbar />
                <SearchBar />
            </div>
            <div className='events-display'>
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


        </div>
    )
}

export default Events