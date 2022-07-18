
import axios from 'axios'
import React, { useCallback } from 'react'
import Dropzone from 'react-dropzone'
const Host = () => {


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
        }).catch(function (err) {
            console.log(err);
        })
    }
    return (
        <div className='border'>
            <Dropzone onDrop={(acceptedFiles) => {
                handlefiles(acceptedFiles);
            }

            }>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} name="video" encType="multipart/form-data" />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>

    )
}

export default Host
