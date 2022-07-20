import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
const Event = () => {
    const videoBg = 'http://127.0.0.1:8000/storage/files/zwwpvtuLTPIvWxGrnlUY9kYuzNZvk83TBlxw0Tav.mp4';
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
            <Navbar />

            <video src={videoBg} loop muted controls />

        </motion.div>
    )
}

export default Event