import React from 'react'
import Logo from './Logo'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserStore } from '../store/UserStore';
const Header = () => {

    const [userNameValue, setuserNameValue] = useState('');
    const [passwordValue, setpasswordValue] = useState('');
    const [loginIsOpen, setloginOpen] = useState(false);
    const [signupIsOpen, setSignupOpen] = useState(false);
    const [userid, setuserid] = useState(0);
    const saveuser = useUserStore((state) => state.setUser);
    const usr = useUserStore((state) => state.user_id);
    const handleLoginOpen = () => {
        setloginOpen(!loginIsOpen);
    };
    const handleSignupOpen = () => setSignupOpen(!signupIsOpen);

    function login() {
        let data = new FormData();
        data.append('username', userNameValue);
        data.append('password', passwordValue);
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/login",
            data: data
        }).then(function (response) {
            if (response.data.status === "success") {
                toast(response.data.status)
                setloginOpen(!loginIsOpen);
                console.log(response.data.user.id);
                saveuser(response.data.user.id);
                console.log(usr);
            }

        }).catch(function (err) {
            toast("Wrong or missing username or/and password")
        })
    }


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
                                <input type="text" placeholder='Enter your username' onChange={(e) => { setuserNameValue(e.currentTarget.value) }} ></input>
                                <input type="password" placeholder='Enter your password' onChange={(e) => { setpasswordValue(e.currentTarget.value) }}  ></input>
                                <button type="button" className='login-btn' onClick={login}>SIGN IN</button>
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
                <ToastContainer />

            </div>



        </div >
    )
}

export default Header