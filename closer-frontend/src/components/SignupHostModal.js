import React, { useState } from 'react'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import axios from 'axios';
const SignupHostModal = ({ signupHostIsOpen, handleSignupHostOpen }) => {
    const [profilePic, setProfilePic] = useState(require('../assets/blankprofile.png'))
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState(0);
    function signupHost() {
        if (profilePic === require('../assets/blankprofile.png' || firstName === '' || lastName === ''
            || username === '' || password === '')) {
            toast('All fields are required');
        } else {
            let data = new FormData();
            data.append("username", username);
            data.append("password", password);
            data.append("first_name", firstName);
            data.append("last_name", lastName);
            data.append("gender", gender);
            data.append("profile_picture", profilePic);

            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/host",
                data: data
            }).then(function (response) {
                toast("Signed up successfully!");
                setTimeout(() => {

                    window.location.reload();
                }, 2000);

            }).catch(function (err) {
                toast(err.response.data.message)
            })
        }

    }

    function profimageUploaded(files) {
        var file = files[0];
        var reader = new FileReader();
        reader.onload = function () {
            setProfilePic(reader.result);
        }
        reader.readAsDataURL(file);
    }

    return (
        <Modal
            open={signupHostIsOpen}
            onClose={handleSignupHostOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='signuphost-modal'>
                <div className='signup-modal-container'>
                    <div className='left-signup'>
                        <div className='signup-heading'>
                            Set up your <span className='purple'>Closer</span> host account
                        </div>
                        <div className='signup-input'>
                            <input type="text" placeholder='Enter your first name' onChange={(e) => setFirstName(e.currentTarget.value)}></input>
                            <input type="text" placeholder='Enter your last name' onChange={(e) => setLastName(e.currentTarget.value)}></input>
                            <input type="text" placeholder='Enter your username' onChange={(e) => setUsername(e.currentTarget.value)}></input>
                            <input type="password" placeholder='Enter your password' onChange={(e) => { setPassword(e.currentTarget.value) }}></input>
                            <select onChange={(e) => {
                                setGender(e.currentTarget.value)
                            }}>
                                <option value="0">Female</option>
                                <option value="1">Male</option>
                                <option value="2">Other</option>
                            </select>
                        </div>

                    </div>
                    <div className='right-signup'>
                        <div className='upload-profile'>
                            <input type="file" name="photo" id="fileId2"
                                onChange={(e) => { profimageUploaded(e.target.files) }} />
                            <div className="upload">
                                <div className='cover-photo-host'>
                                    <img src={profilePic} alt='' />
                                </div>
                            </div>
                            <label className='profile-photo-desc' htmlFor="fileId2">click here to upload profile picture</label>
                        </div>
                        <div>
                            <button type='button' className='signup-button' onClick={signupHost}>Start hosting</button>
                        </div>

                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default SignupHostModal