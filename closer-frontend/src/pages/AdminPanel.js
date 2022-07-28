import React, { useEffect, useState } from 'react'
import PageNotFound from './PageNotFound'
import { useUserStore } from '../store/UserStore'
import Navbar from '../components/Navbar'
import PageHeading from '../components/PageHeading'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios'
const AdminPanel = () => {
    const usertype = useUserStore((state) => state.usertype)
    const token = useUserStore((state) => state.token)
    const [catImage, setCatImage] = useState(require('../assets/white.jpg'));
    const [catName, setCatName] = useState('');
    const [usertypeCount, setUsertypeCount] = useState('');

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    function addCategory() {
        if (catName === '' || catImage === require('../assets/blankprofile.png')) {
            toast("Some fields are missing")
        } else {

            let data = new FormData();
            data.append('name', catName);
            data.append('cover_photo', catImage);

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/createCategory',
                data: data,
                headers: headers
            }).then(function (response) {

                toast("Added successfully");
                let cat_input = "";
                cat_input = document.getElementById("cat-input-field");
                cat_input.value = "";



            }).catch(function (err) {
                console.log(err);
                toast("looks like something went wrong :(")
            })
        }
    }

    function getUsersCount() {

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
    function getExpired() {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/admin/getExpiredEvents",
            headers: headers
        }).then(function (response) {
            console.log(response)
        })
    }

    useEffect(() => {
        getUsersCount();
        getExpired();
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
                            <input type="text" placeholder='Enter category name' id='cat-input-field' onChange={(e) => {
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
                <div className='expired-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Anom</td>
                                <td>19</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Megha</td>
                                <td>19</td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td>Subham</td>
                                <td>25</td>
                                <td>Male</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ToastContainer />
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