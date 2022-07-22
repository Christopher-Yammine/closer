
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const EventCard = ({ data, title, id }) => {
    const navigate = useNavigate();


    return (
        <>
            <motion.div
                key={id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='eventcard'
                onClick={() => {
                    navigate(`/event/${id}`);
                }}>
                <img src={data} alt='' />
                <div className='eventname'>
                    {title}
                </div>
            </motion.div>
        </>
    )
}

export default EventCard