import React from 'react'
import Logo from './Logo'

const Header = () => {
    return (
        <div>

            <div className='main-container'>


                <div className='header'>

                    <Logo />
                    <div className='login'>
                        <button type='button' className='button-login'>Log in</button>
                        <button type='button' className='button-signup'>Sign up</button>
                    </div>

                </div>


            </div>



        </div >
    )
}

export default Header