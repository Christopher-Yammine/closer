import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PageHeading from '../components/PageHeading'
import { useUserStore } from '../store/UserStore'
const EditProfile = () => {
    const { REACT_APP_BASE_URL } = process.env;
    const usertype = useUserStore((state) => state.usertype);
    const user_token = useUserStore((state) => state.token);
    const [profilePic, setProfilePic] = useState(require('../assets/blankprofile.png'))
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user_token

    }
    function getUserInfo() {
        axios({
            method: "get",
            url: REACT_APP_BASE_URL + "userInfo",
            headers: headers
        }).then(function (response) {
            setFirstName(response.data.user.first_name);
            setLastName(response.data.user.last_name);
            setProfilePic(response.data.user.profile_picture);
        })
    }

    useEffect(() => {
        getUserInfo();
    }, [])


    return (
        <>
            <Navbar usertype={usertype} />
            <PageHeading text="Edit Profile" />
            <div className='edit-profile-main-container'>
                <div className='edit-profile-form-container'>
                    <div className='left-signup'>
                        <div className='signup-heading'>
                            Edit your <span className='purple'>Closer</span> account
                        </div>
                        <div className='signup-input'>
                            <input type="text" value={firstName} placeholder='Enter your first name' onChange=
                                {
                                    (e) => setFirstName(e.currentTarget.value)
                                }>

                            </input>
                            <input type="text" placeholder='Enter your last name' value={lastName} onChange={(e) => setLastName(e.currentTarget.value)}></input>
                            <button type='button' className='signup-button' onClick={''}>Save</button>
                        </div>

                    </div>
                    <div className='right-edit'>
                        <div className='upload-profile'>
                            <input type="file" name="photo" id="fileId2"
                                onChange={(e) => { '' }} />
                            <div className="upload-edit">
                                <div className='uploaded-photo-edit'>
                                    <img src={profilePic} alt='' />
                                </div>
                            </div>

                            <label className='profile-photo-desc' htmlFor="fileId2">click here to upload profile picture</label>





                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile