import React from 'react'
import Logo from './Logo'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
const Header = () => {


    const [loginIsOpen, setloginOpen] = useState(false);
    const [signupIsOpen, setSignupOpen] = useState(false);
    const handleLoginOpen = () => {
        setloginOpen(!loginIsOpen);
    };
    const handleSignupOpen = () => setSignupOpen(!signupIsOpen);


    return (
        <div>

            <div className='main-container'>
                <Modal
                    open={loginIsOpen}
                    onClose={handleLoginOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='login-modal'>
                        <div className='login-heading'>
                            Log in to Your Account
                        </div>
                        <div className='login-subheading'>
                            Choose from a huge selection of events,<br />
                            gatherings and so much more.
                        </div>
                        <div className='login-form'>
                            <div className='login-logo'>
                                <img src={require("../assets/regular-logo.png")} width={300} alt=" " />
                            </div>
                            <div className='login-input'>
                                <input type="text" placeholder='Enter your username'  ></input>
                                <input type="password" placeholder='Enter your password'  ></input>
                                <button type="button" className='login-btn'>SIGN IN</button>
                            </div>
                        </div>
                    </Box>
                </Modal>
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


                <div className='header'>

                    <Logo />
                    <div className='login'>
                        <button type='button' className='button-login' onClick={handleLoginOpen}>Log in</button>
                        <button type='button' className='button-signup' onClick={handleSignupOpen}>Sign up</button>
                    </div>

                </div>


            </div>



        </div >
    )
}

export default Header