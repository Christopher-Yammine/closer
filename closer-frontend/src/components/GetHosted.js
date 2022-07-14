import React from 'react'

const GetHosted = () => {
  return (
    <div>
      <div className='splash-host'>
        <div className='splash-host-text'>
          <div className='heading1'>
            <h1>
              Get Recognized
            </h1>
          </div>
          <div className='splash-host-description'>
            <p>
              Closer offers a hosting service where you can invite your community members with the ease of a QR code
            </p>
          </div>
          <button type="button" className='host-button'>Host your event</button>
        </div>


        <div className='splash-host-artboard'>
          <img src={require("../assets/host-artboard.png")} />
        </div>
      </div>
    </div >
  )
}

export default GetHosted