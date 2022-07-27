import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupHostModal from './SignupHostModal';
import { useState } from 'react';

const GetHosted = () => {
  const [signupHostIsOpen, setSignupHostOpen] = useState(false);
  const handleSignupHostOpen = () => {
    setSignupHostOpen(!signupHostIsOpen)
  };

  return (
    <div>
      <SignupHostModal signupHostIsOpen={signupHostIsOpen} handleSignupHostOpen={handleSignupHostOpen} />
      <div className='splash-host'>
        <div className='splash-host-text'>
          <div className='heading1'>
            <h1>
              Get Recognized
            </h1>
          </div>
          <div className='splash-host-description'>
            <p>
              Closer offers a hosting service where you can invite your community members with ease
            </p>
          </div>
          <div className='host-button-container'>
            <button type="button" className='host-button' onClick={handleSignupHostOpen}>Host your event</button>
          </div>

        </div>


        <div className='splash-host-artboard'>
          <img src={require("../assets/host-artboard.png")} alt="" />
        </div>
      </div>
      <div className='toast'>
        <ToastContainer />
      </div>

    </div >
  )
}

export default GetHosted