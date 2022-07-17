import React, { useEffect } from 'react'

const EventCard = ({ data, title }) => {



    return (
        <>
            <div className='eventcard'>
                <img src={data} alt='' />
                <div className='eventname'>
                    {title}
                </div>
            </div>
        </>
    )
}

export default EventCard