
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const EventCard = ({ data, title, id }) => {
    const navigate = useNavigate();


    return (
        <>
            <motion.div

                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='eventcard'
                key={id}
                onClick={() => {
                    navigate(`/event?id=${id}`);
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