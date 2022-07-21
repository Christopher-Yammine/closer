import React from 'react'
import { useUserStore } from '../store/UserStore';

const Profile = () => {
    const profile_pic = useUserStore((state) => state.profile_picture);

    function change(x) {
        let btn_logout = '';
        x.classList.toggle("change");
        btn_logout = document.getElementsByClassName('button-logout')[0];
        btn_logout.classList.toggle("button-logout-shown")
    }
    return (
        <div className='profile-logout'>
            <div className='profile'>
                <img src={profile_pic} alt=""></img>
                <div className="container" onClick={(e) => { change(e.currentTarget) }}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div >
            <div>
                <button type='button' className='button-logout'>Log out</button>
            </div>
        </div>

    )
}

export default Profile