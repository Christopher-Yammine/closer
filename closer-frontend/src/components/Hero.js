import React from 'react'
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();
    function land() {
        navigate("/landingpage");
    }
    return (
        <div>
            <div className='main-header'>
                <h1>Closer</h1>
            </div>
            <div className='main-header-description'>
                <h2>
                    It’s everywhere you<br />
                    want to be
                </h2>

            </div>
            <div className='getstarted'>
                <button type='button' className='explore' onClick={land}>Explore</button>
            </div>


        </div>
    )
}

export default Hero