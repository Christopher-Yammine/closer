import React from 'react'
import GetHosted from '../components/GetHosted'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

const Splash = () => {
    return (
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
            <div className='splash'>
                <div><Header /></div>
                <div><Hero /></div>
            </div>
            <div>
                <div><GetHosted /></div>
            </div>
        </motion.div>

    )
}

export default Splash