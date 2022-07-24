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
                    </div>
                    <div className='right-signup'>
                        <button type="button" className='signup-btn'></button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default SignupModal