import React from 'react'
import GetHosted from '../components/GetHosted'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Splash = () => {
    return (
        <div>
            <div className='splash'>
                <div><Header /></div>
                <div><Hero /></div>
            </div>
            <div>
                <div><GetHosted /></div>
            </div>
        </div>

    )
}

export default Splash