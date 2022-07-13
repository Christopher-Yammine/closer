import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='main-container'>

                <div className='header'>
                    <div className='logo'>
                        <img src={require("../assets/Group.png")} width={100} />
                    </div>
                    <div className='login'>
                        <button type='button' className='button-login'>Log in</button>
                        <button type='button' className='button-signup'>Sign up</button>
                    </div>
                </div>
                <div className='hero'>
                    <h1>Closer</h1>
                </div>
                <div className='hero-description'>
                    <h1>
                        It’s everywhere you<br />
                        want to be
                    </h1>

                </div>
                <div className='getstarted'>
                    <button type='button' className='explore'>Explore</button>
                </div>




            </div>



        </div >
    )
}

export default Header