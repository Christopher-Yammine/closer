
import { motion } from "framer-motion";
const EventCard = ({ data, title }) => {



    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='eventcard'>
                <img src={data} alt='' />
                <div className='eventname'>
                    {title}
                </div>
            </motion.div>
        </>
    )
}

export default EventCard