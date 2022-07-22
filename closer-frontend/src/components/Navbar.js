import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom';
import Profile from './Profile';

const Navbar = ({ usertype }) => {


    return (
        <div>

            <div className='navbar'>
                <div className='clickable'>
                    <Logo />
                </div>
                <div className='navbar-pages'>

                    <div>
                        <NavLink to="/landingpage">
                            Home
                        </NavLink>
                    </div>
                    <div className='vl' />
                    <div>
                        <NavLink to="/Events">
                            Events
                        </NavLink>
                    </div>
                    <div className='vl' />

                    {(() => {
                        if (usertype === "user" || usertype === undefined || usertype === "") {
                            return (
                                <div>

                                    <NavLink to="/top-hosts">
                                        Top Hosts
                                    </NavLink>


                                </div>)
                        }
                        else if (usertype === "host") {
                            return (
                                <>

                                    <div>
                                        <NavLink to="/top-hosts">
                                            Top Hosts
                                        </NavLink>
                                    </div>
                                    <div className='vl' />
                                    <div>
                                        <NavLink to="/your-event">
                                            Your Event
                                        </NavLink>

                                    </div>
                                </>
                            )

                        } else {
                            return (
                                <div>
                                    <NavLink to="/admin">
                                        Admin
                                    </NavLink>
                                </div>)

                        }
                    })()}

                </div>

                <Profile />

            </div>

        </div>
    )
}

export default Navbar