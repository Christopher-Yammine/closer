import React from 'react'
import Logo from './Logo'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserStore } from '../store/UserStore';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
const Header = () => {

    const [loginIsOpen, setloginOpen] = useState(false);
    const [signupIsOpen, setSignupOpen] = useState(false);

    const loggedin = useUserStore((state) => state.user_id);


    const handleLoginOpen = () => {
        setloginOpen(!loginIsOpen);
    };
    const handleSignupOpen = () => {
        setSignupOpen(!signupIsOpen)
    };


    return (

        <div>
            <LoginModal loginIsOpen={loginIsOpen} handleLoginOpen={handleLoginOpen} />
            <SignupModal signupIsOpen={signupIsOpen} handleSignupOpen={handleSignupOpen} />
            <div className='main-container'>




                <div className='header'>

                    <Logo />
                    <div className='login'>
                        {!loggedin && <button type='button' className='button-login' onClick={handleLoginOpen}>Log in</button>}
                        {!loggedin && <button type='button' className='button-signup' onClick={handleSignupOpen}>Sign up</button>}

                    </div>

                </div>
                <ToastContainer />

            </div>



        </div >
    )
}

export default Header