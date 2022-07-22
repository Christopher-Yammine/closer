import React from 'react'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
    const navigate = useNavigate();
    function backToSafety() {
        navigate("/")
    }
    return (
        <div className='notfound'>
            <div className='notfound-title'>
                Are you lost? ☹
            </div>
            <div className='goback-btn'>
                <button type='button' className='btn-back' onClick={backToSafety}>
                    Go back to safety
                </button>
            </div>

        </div >
    )
}

export default PageNotFound