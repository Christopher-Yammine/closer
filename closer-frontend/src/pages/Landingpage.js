import React from 'react'
import HorizontalTrending from '../components/Horizontal'
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
                    <HorizontalTrending />
                </div>
                <div className='trending-title'>
                    Categories
                </div>
                <div>
                    <HorizontalTrending />
                </div>
            </div>

        </div>
    )
}

export default Landingpage