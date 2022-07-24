import React from 'react'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box';
const SignupModal = ({ signupIsOpen, handleSignupOpen }) => {
    return (
        <Modal
            open={signupIsOpen}
            onClose={handleSignupOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='signup-modal'>
                <div className='signup-modal-container'>
                    <div className='left-signup'>
                        <div className='signup-heading'>
                            Set up your <span className='purple'>Closer</span> account
                        </div>
                        <div className='signup-input'>
                            <input type="text" placeholder='Enter your first name'></input>
                            <input type="text" placeholder='Enter your last name'></input>
                            <input type="text" placeholder='Enter your username'></input>
                            <input type="password" placeholder='Enter your password'></input>
                            <select>
                                <option value="0">Female</option>
                                <option value="1">Male</option>
                                <option value="2">Other</option>
                            </select>
                        </div>

                    </div>
                    <div className='right-signup'>
                        <div className='upload-profile'>
                            <input type="file" name="photo" id="fileId2"
                                onChange={(e) => { }} />
                            <div className="upload">
                                <div className='cover-photo-host'>
                                    <img src={''} alt='' />
                                </div>
                            </div>
                            <label className='cover-photo-desc' htmlFor="fileId2">click here to upload your event card photo </label>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default SignupModal