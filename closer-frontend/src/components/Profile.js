import React from 'react'
import { useUserStore } from '../store/UserStore';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const profile_pic = useUserStore((state) => state.profile_picture);
    const removeUserId = useUserStore((state) => state.removeUserId);
    const removeProfile = useUserStore((state) => state.removeProfile);
    const removeToken = useUserStore((state) => state.removeToken);
    const removeUsertype = useUserStore((state) => state.removeUsertype);
    const user_id = useUserStore((state) => state.user_id)
    function editProfile() {
        navigate('/edit-profile');
    }
    function logout() {
        removeUserId();
        removeProfile();
        removeToken();
        removeUsertype();
        navigate("/");

    }

    function change(x) {
        let btn_logout = '';
        let menu = '';
        x.classList.toggle("change");
        btn_logout = document.getElementsByClassName('button-logout')[0];
        menu = document.getElementsByClassName('navbar-pages')[0];
        btn_logout.classList.toggle("button-logout-shown")
        menu.classList.toggle("navbar-pages-shown")

    }
    return (
        <div className='profile-logout'>
            {user_id && <> <div className='profile'>
                <img src={profile_pic} alt="" onClick={editProfile} className="edit-profile-picture"></img>
                <div className="container" onClick={(e) => { change(e.currentTarget) }}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div >

                <div>

                    <button type='button' className='button-logout' onClick={logout}>Log out</button>
                </div></>}
        </div>

    )
}

export default Profile