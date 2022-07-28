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
    const [expiredEvents, setExpiredEvents] = useState([]);

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }

    function deleteEvent(id) {
        let data = new FormData();
        data.append("event", id)
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/admin/deleteExpired",
            data: data,
            headers: headers
        }).then(function (response) {
            getExpired();
        }).catch(function (err) {
            toast("looks like something went wrong :(")
        })

    }
    function addCategory() {
        if (catName === '' || catImage === require('../assets/white.jpg')) {
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
                setCatImage(require('../assets/white.jpg'))


            }).catch(function (err) {
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
            setExpiredEvents(response.data.data)
        })
    }

    useEffect(() => {

        getUsersCount();
        getExpired();
        // eslint-disable-next-line
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
                <div className='table-container'>
                    <div className='expired-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Date</th>
                                    <th>Capacity</th>
                                    <th>Total Attendees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expiredEvents.map(expEvent => (
                                    <tr key={expEvent.id}>
                                        <td>{expEvent.name}</td>
                                        <td>{expEvent.city}</td>
                                        <td>{expEvent.date}</td>
                                        <td>{expEvent.capacity}</td>
                                        <td>{expEvent.total_attendees}</td>
                                        <td><button id={expEvent.id} className="delete-btn" onClick={(e) => { deleteEvent(e.currentTarget.id) }}>X</button></td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
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