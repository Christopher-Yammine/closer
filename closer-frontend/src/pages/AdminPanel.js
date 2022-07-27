import React, { useState } from 'react'
import PageNotFound from './PageNotFound'
import { useUserStore } from '../store/UserStore'
import Navbar from '../components/Navbar'
import PageHeading from '../components/PageHeading'
const AdminPanel = () => {
    const usertype = useUserStore((state) => state.usertype)
    const [catImage, setCatImage] = useState(require('../assets/blankprofile.png'))

    function catImageUploaded(files) {
        var file = files[0];
        var reader = new FileReader();


        reader.onload = function () {
            setCatImage(reader.result);

        }

        reader.readAsDataURL(file);
    }
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
                                200 users
                            </div>

                        </div>
                        <div className='hosts-count'>
                            <div className='hosts-count-title'>
                                Hosts count
                            </div>
                            <div>
                                50 hosts
                            </div>
                        </div>
                    </div>
                    <div className='new-cat-container'>
                        <div className='cat-container-left'>
                            <h1>chros</h1>
                            <label className='profile-photo-desc' htmlFor="fileId2">click here to upload profile picture</label>
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