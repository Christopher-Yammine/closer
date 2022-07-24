import React, { useState } from 'react'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box';
const SignupModal = ({ signupIsOpen, handleSignupOpen }) => {
    const [profilePic, setProfilePic] = useState(require('../assets/blankprofile.png'))

    function signup() {

    }

    function profimageUploaded(files) {
        var file = files[0];
        var reader = new FileReader();


        reader.onload = function () {
            setProfilePic(reader.result);

        }

        reader.readAsDataURL(file);
    }

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
                                onChange={(e) => { profimageUploaded(e.target.files) }} />
                            <div className="upload">
                                <div className='cover-photo-host'>
                                    <img src={profilePic} alt='' />
                                </div>
                            </div>
                            <label className='profile-photo-desc' htmlFor="fileId2">click here to upload profile picture</label>
                        </div>
                        <button type='button' className='signup-button' onClick={signup}>Sign up</button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default SignupModal