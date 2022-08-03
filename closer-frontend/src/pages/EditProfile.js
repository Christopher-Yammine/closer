import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PageHeading from '../components/PageHeading'
import { useUserStore } from '../store/UserStore'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
    const { REACT_APP_BASE_URL } = process.env;
    const navigate = useNavigate();
    const usertype = useUserStore((state) => state.usertype);
    const user_token = useUserStore((state) => state.token);
    const saveProfile = useUserStore((state) => state.setProfile);
    const [profilePic, setProfilePic] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user_token

    }
    function profimageUploaded(files) {
        var file = files[0];
        var reader = new FileReader();
        reader.onload = function () {
            setProfilePic(reader.result);
        }
        reader.readAsDataURL(file);
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
    function updateUser() {
        let data = new FormData();
        data.append("first_name", firstName);
        data.append("last_name", lastName);
        data.append("profile_picture", profilePic);
        axios({
            method: "post",
            url: REACT_APP_BASE_URL + "updateUserInfo",
            data: data,
            headers: headers
        }).then(function (response) {
            getUserInfo();
            saveProfile(response.data.updated_user.profile_picture);
            toast("Updated successfully!");
            setTimeout(() => {
                navigate("/landingpage")
            }, 2000);
        }).catch(function (err) {
            toast('Something went wrong please try again later');
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
                            <button type='button' className='signup-button' onClick={updateUser}>Save</button>
                        </div>

                    </div>
                    <div className='right-edit'>
                        <div className='upload-profile'>
                            <input type="file" name="photo" id="fileId2"
                                onChange={(e) => { profimageUploaded(e.target.files) }} />
                            <div className="upload-edit">
                                <div className='uploaded-photo-edit'>
                                    <img src={profilePic} alt='' />
                                </div>
                            </div>
                            <label className='profile-photo-desc' htmlFor="fileId2">Upload new profile picture</label>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default EditProfile