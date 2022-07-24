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
            <Box className='login-modal'>
                <h1>
                    chris
                </h1>
            </Box>
        </Modal>
    )
}

export default SignupModal