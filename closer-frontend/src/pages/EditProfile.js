import React from 'react'
import Navbar from '../components/Navbar'
import PageHeading from '../components/PageHeading'
import { useUserStore } from '../store/UserStore'
const EditProfile = () => {

    const usertype = useUserStore((state) => state.usertype)

    return (
        <>
            <Navbar usertype={usertype} />
            <PageHeading text="Edit Profile" />
        </>
    )
}

export default EditProfile