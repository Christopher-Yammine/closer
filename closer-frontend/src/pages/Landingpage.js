import React from 'react'
import HorizontalTrending from '../components/Horizontal'
import VideoBg from '../components/VideoBg'
import { motion } from 'framer-motion'
import { useUserStore } from '../store/UserStore'
const Landingpage = () => {
    const usertype = useUserStore((state) => state.usertype);
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }} >
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

        </motion.div>
    )
}

export default Landingpage