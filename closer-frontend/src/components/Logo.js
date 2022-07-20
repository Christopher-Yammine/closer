import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
const Logo = () => {
    const navigate = useNavigate();
    function goHome() {
        navigate("/")

    }
    return (
        <motion.div animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
            className='logo' >
            <img src={require("../assets/Group.png")} width={100} alt="" onClick={goHome} />
        </motion.div>
    )
}

export default Logo