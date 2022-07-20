import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import { motion } from 'framer-motion'

const Host = () => {

    const [textDesc, setTextDesc] = useState("Drag 'n' drop your video here, or click to select file");
    const [base64String, setbase64String] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC");
    const [selectedPosition, setSelectedPosition] = useState([33.89, 35.501])
    const [location, setLocation] = useState('');
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
            console.log(data);
            setLocation("" + data.locality + ", " + data.countryName);
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
    function handlefiles(acceptedFiles) {
        console.log(acceptedFiles[0]);

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
            console.log(response);
            setTextDesc(acceptedFiles[0].name);
        }).catch(function (err) {
            console.log(err);
            setTextDesc("Error, file too big");
        })
    }
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
            <Navbar />
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

                    <input type="text" placeholder='Event title'  ></input>
                    <input type="number" placeholder='Maximum capacity'></input>
                    <input type="date" placeholder='date' onChange={(e) => {
                        console.log(e.currentTarget.value)
                    }} />
                    <input type='time' placeholder='time' onChange={(e) => {
                        console.log(e.currentTarget.value)
                    }} />
                    <select>
                        <option>event</option>
                        <option>event</option>
                        <option>event</option>
                    </select>



                </div>
                <div className='upload-photo'>
                    <input type="file" name="photo" id="fileId"
                        onChange={(e) => { imageUploaded(e.target.files) }} />
                    <div className="upload border">
                        <div className='cover-photo'>
                            <img src={base64String} alt='' />
                        </div>
                    </div>
                    <label className='cover-photo-desc' htmlFor="fileId">click here to upload your cover photo (1365x512)</label>
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

        </motion.div >

    )
}

export default Host
