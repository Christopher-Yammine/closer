import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom';

const Navbar = ({ id_usertype }) => {


    return (
        <div>

            <div className='navbar'>
                <div>
                    <Logo />
                </div>
                <div className='navbar-pages'>

                    <div>
                        <NavLink to="/">
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
                        if (id_usertype == 0) {
                            return (
                                <div>

                                    <NavLink to="/top-hosts">
                                        Top Hosts
                                    </NavLink>


                                </div>)
                        }
                        else if (id_usertype == 1) {
                            return (
                                <div>
                                    <div className='navbar-pages navbar-host'>
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
                                    </div>
                                </div>
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
                <div className='profile'>
                    <h1>
                        profile
                    </h1>

                </div>
            </div>

        </div>
    )
}

export default Navbar