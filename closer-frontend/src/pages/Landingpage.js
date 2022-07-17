import React from 'react'
import Horizontal from '../components/Horizontal'
import VideoBg from '../components/VideoBg'

const Landingpage = () => {
    return (
        <div>
            <div>
                <VideoBg />

            </div>
            <div className='trending-events'>
                <div className='trending-title'>
                    Trending events
                </div>
                <div>
                    <Horizontal />
                </div>

            </div>

        </div>
    )
}

export default Landingpage