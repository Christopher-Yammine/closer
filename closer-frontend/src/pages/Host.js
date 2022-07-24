import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import { motion } from 'framer-motion'
import { useUserStore } from '../store/UserStore'
import PageNotFound from './PageNotFound'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const Host = () => {

    const [textDesc, setTextDesc] = useState("Drag 'n' drop your video here, or click to select file");
    const [base64String, setbase64String] = useState(require('../assets/white.jpg'));
    const [cardbase64String, setcardbase64String] = useState(require('../assets/white.jpg'));
    const [selectedPosition, setSelectedPosition] = useState([33.89, 35.501])
    const [location, setLocation] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    const [dateNow, setDateNow] = useState(new Date().toISOString().split('.')[0])
    const [categoryNames, setCategoryNames] = useState([]);
    const [videoLink, setVideoLink] = useState('');
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventCategory, setEventCategory] = useState(1);
    const [eventCapacity, setEventCapacity] = useState(0);

    const usertype = useUserStore((state) => state.usertype);
    const user_token = useUserStore((state) => state.token);
    function addEvent() {
        if (base64String === require('../assets/white.jpg') || cardbase64String === require('../assets/white.jpg') ||
            location === '' || formattedDate === '' || videoLink === '' || eventName === '' || eventDescription === ''
            || eventCapacity === 0) {
            toast("Please fill all the fields");
        } else {
            let data = new FormData();
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user_token
            }
            data.append("name", eventName);
            data.append("description", eventDescription);
            data.append("date", formattedDate);
            data.append("video_url", videoLink);
            data.append("city", location);
            data.append("category_id", eventCategory);
            data.append("video_url", videoLink);
            data.append("cover_photo", cardbase64String);
            data.append("banner_photo", base64String);
            data.append("capacity", eventCapacity);

            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/event",
                headers: headers,
                data: data
            }).then(function (response) {
                console.log(response);
            }).catch(function (err) {
                console.log(err);
            })

        }

    }

    function getCategoryNames() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/getAllCategories'
        }).then(function (response) {
            setCategoryNames(response.data.data.category)
        })
    }
    const getName = async (e) => {
        try {
            const res = await fetch(
                "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
                selectedPosition[0] +
                "&longitude=" +
                selectedPosition[1] +
                "&localityLanguage=en"
            );
            const data = await res.json();

            setLocation("" + data.city + ", " + data.locality);

        } catch (err) {
            console.log(err);
        }
    };
    function imageUploaded(files) {
        var file = files[0];
        var reader = new FileReader();


        reader.onload = function () {
            setbase64String(reader.result);

        }

        reader.readAsDataURL(file);

    }
    function cardimageUploaded(files) {
        var file = files[0];
        var reader = new FileReader();


        reader.onload = function () {
            setcardbase64String(reader.result);

        }

        reader.readAsDataURL(file);
    }
    function handlefiles(acceptedFiles) {

        console.log(acceptedFiles)
        let data = new FormData();
        let headers = {
            'Content-Type': 'multipart/form-data'
        }
        data.append('video', acceptedFiles[0]);
        axios({
            method: 'post',
            url: "http://127.0.0.1:8000/api/file",
            data: data,
            headers: headers

        }).then(function (response) {

            setTextDesc(acceptedFiles[0].name);
            setVideoLink(response.data.link.fileLink);
        }).catch(function (err) {
            console.log(err);
            setTextDesc("Error, file too big");
        })
    }
    useEffect(() => {
        getCategoryNames();
    }, [])
    if (usertype === 'host') {
        return (

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
                <Navbar usertype={usertype} />
                <div className='dropzone'>
                    <Dropzone multiple={false} onDrop={(acceptedFiles) => {
                        handlefiles(acceptedFiles);
                    }


                    }>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>

                                    <input {...getInputProps()} name="video" encType="multipart/form-data" />
                                    <div className='dropzone-input'>
                                        <img src={require("../assets/upload.png")} alt="" />
                                    </div>

                                    <p id="file">{textDesc}</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
                <div className='event-info-title'>
                    Event info
                </div>
                <div className='event-info-container'>
                    <div className='event-info-input'>

                        <input type="text" placeholder='Event title' onChange={(e) => { setEventName(e.currentTarget.value) }} ></input>
                        <input type="text" placeholder='Small description' onChange={(e) => { setEventDescription(e.currentTarget.value) }}></input>
                        <input type="number" placeholder='Maximum capacity' onChange={(e) => { setEventCapacity(e.currentTarget.value) }}></input>
                        <input type="datetime-local" value={dateNow} onChange={(e) => {
                            setDateNow('');
                            setFormattedDate(e.currentTarget.value.replace('T', ' '))
                            console.log(formattedDate);
                        }} />
                        <select onChange={(e) => setEventCategory(e.currentTarget.value)}>
                            {categoryNames.map(category =>
                            (<option key={category.id} value={category.id}>
                                {category.name}
                            </option>))}
                        </select>



                    </div>
                    <div className='upload-photo'>
                        <input type="file" name="photo" id="fileId2"
                            onChange={(e) => { cardimageUploaded(e.target.files) }} />
                        <div className="upload">
                            <div className='cover-photo-host'>
                                <img src={cardbase64String} alt='' />
                            </div>
                        </div>
                        <label className='cover-photo-desc' htmlFor="fileId2">click here to upload your event card photo </label>
                    </div>



                </div>
                <div className='event-info-title'>
                    Event banner
                </div>
                <div className='banner-main-container'>

                    <div className='upload-banner-container'>
                        <div className='upload-photo'>
                            <input type="file" name="photo" id="fileId"
                                onChange={(e) => { imageUploaded(e.target.files) }} />
                            <div className="upload-banner">
                                <div className='banner-photo-host '>
                                    <img src={base64String} alt='' width="675px" height="225px" />
                                </div>
                            </div>
                            <label className='cover-photo-desc' htmlFor="fileId">click here to upload your banner photo (1365x512)</label>
                        </div>
                    </div>
                </div>
                <div className='event-info-title'>
                    Choose a location
                </div>
                <div className='event-info-container'>
                    <div className='leaflet-container'>
                        <Map
                            selectedPosition={selectedPosition}
                            setSelectedPosition={setSelectedPosition}
                            getName={getName}
                            setLocation={setLocation}
                        />
                    </div>
                </div>
                <div className='btn-reserve-container'>
                    <button type='button' className='btn-reserve' onClick={addEvent}>Add your event</button>
                </div>
                <ToastContainer />
            </motion.div >

        )
    } else {
        return (
            <>
                <PageNotFound />
            </>
        )
    }
}

export default Host
