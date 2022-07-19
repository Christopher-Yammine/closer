import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logo = () => {
    const navigate = useNavigate();
    function goHome() {
        navigate("/")

    }
    return (
        <div className='logo' >
            <img src={require("../assets/Group.png")} width={100} alt="" onClick={goHome} />
        </div>
    )
}

export default Logo