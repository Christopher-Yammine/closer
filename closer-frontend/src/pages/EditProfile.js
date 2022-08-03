import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import PageHeading from '../components/PageHeading'
import { useUserStore } from '../store/UserStore'
const EditProfile = () => {

    const usertype = useUserStore((state) => state.usertype);
    const [profilePic, setProfilePic] = useState(require('../assets/blankprofile.png'))
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState(0);


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