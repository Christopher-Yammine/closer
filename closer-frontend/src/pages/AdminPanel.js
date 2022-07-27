import React from 'react'
import PageNotFound from './PageNotFound'
import { useUserStore } from '../store/UserStore'
import Navbar from '../components/Navbar'
import PageHeading from '../components/PageHeading'
const AdminPanel = () => {
    const usertype = useUserStore((state) => state.usertype)

    if (usertype === 'admin') {
        return (
            <>
                <Navbar usertype={usertype} />
                <PageHeading text="Admin Panel"/>
                <div className='users-stats-container'>
                    
                </div>
            </>
        )
    }
    else {
        return (
            <PageNotFound />
        )
    }
}

export default AdminPanel