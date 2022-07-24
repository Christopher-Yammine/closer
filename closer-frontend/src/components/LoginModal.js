import React from 'react'
import Modal from '@mui/material/Modal';
import axios from 'axios';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useUserStore } from '../store/UserStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const LoginModal = ({ loginIsOpen, handleLoginOpen }) => {
    const [userNameValue, setuserNameValue] = useState('');
    const [passwordValue, setpasswordValue] = useState('');
    const saveUserId = useUserStore((state) => state.setUser);
    const saveProfile = useUserStore((state) => state.setProfile);
    const saveToken = useUserStore((state) => state.setToken);
    const saveType = useUserStore((state) => state.setUsertype);
    const loggedin = useUserStore((state) => state.user_id);
    const navigate = useNavigate();
    function login() {
        if (!loggedin) {
            let data = new FormData();
            data.append('username', userNameValue);
            data.append('password', passwordValue);
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/login",
                data: data
            }).then(function (response) {

                if (response.data.status === "success") {

                    saveUserId(response.data.user.id);
                    saveToken(response.data.authorisation.token);
                    saveProfile(response.data.user.profile_picture);
                    saveType(response.data.user.type);
                    navigate("/landingpage");


                }

            }).catch(function (err) {
                toast("Wrong or missing username or/and password")
            })
        } else {
            toast("You already logged in")
            setTimeout(() => {
                navigate("/landingpage")
            }, 6000);

        }
    }

    return (
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
    )
}

export default LoginModal