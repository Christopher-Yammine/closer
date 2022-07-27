import React, { useEffect, useState } from 'react'
import PageNotFound from './PageNotFound'
import { useUserStore } from '../store/UserStore'
import Navbar from '../components/Navbar'
import PageHeading from '../components/PageHeading'
import axios from 'axios'
const AdminPanel = () => {
    const usertype = useUserStore((state) => state.usertype)
    const token = useUserStore((state) => state.token)
    const [catImage, setCatImage] = useState(require('../assets/blankprofile.png'));
    const [catName, setCatName] = useState('');
    const [usertypeCount, setUsertypeCount] = useState();



    function getUsersCount() {
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/admin/usersCount",
            headers: headers

        }).then(function (response) {
            setUsertypeCount(response.data)
        }).catch(function (err) {
            console.log(err);
        })
    }
    function catImageUploaded(files) {
        var file = files[0];
        var reader = new FileReader();


        reader.onload = function () {
            setCatImage(reader.result);

        }

        reader.readAsDataURL(file);
    }

    useEffect(() => {
        getUsersCount();
    }, [])

    if (usertype === 'admin') {
        return (
            <>
                <Navbar usertype={usertype} />
                <PageHeading text="Admin Panel" />
                <div className='users-stats-container'>
                    <div className='left-stats'>


                        <div className='users-count'>
                            <div className='users-count-title'>
                                Users count
                            </div>
                            <div>
                                {usertypeCount.user_count} users
                            </div>

                        </div>
                        <div className='hosts-count'>
                            <div className='hosts-count-title'>
                                Hosts count
                            </div>
                            <div>
                                {usertypeCount.host_count} hosts
                            </div>
                        </div>
                    </div>
                    <div className='new-cat-container'>
                        <div className='cat-container-left'>
                            <input type="text" placeholder='Enter category name' onChange={(e) => {
                                setCatName(e.currentTarget.value)
                            }}></input>
                            <label className='profile-photo-desc' htmlFor="fileId2">upload picture</label>
                            <button className='login-btn' onClick={addCategory}>Add category</button>
                        </div>
                        <div className='upload-category'>
                            <input type="file" name="photo" id="fileId2"
                                onChange={(e) => { catImageUploaded(e.target.files) }} />
                            <div className="upload">
                                <div className='uploaded-photo'>
                                    <img src={catImage} alt='' />
                                </div>
                            </div>



                        </div>

                    </div>
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