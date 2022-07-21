import React from 'react'

const Attendee = ({ srcdata, username }) => {
    return (
        <div
            className='attendee'>
            <img src={srcdata} alt='' />
            <div className='attendee-name'>
                {username}
            </div>
        </div>
    )
}

export default Attendee