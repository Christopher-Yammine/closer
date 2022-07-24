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
    function logout() {
        removeUserId();
        removeProfile();
        removeToken();
        removeUsertype();
        navigate("/");

    }

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

                {user_id && <button type='button' className='button-logout' onClick={logout}>Log out</button>}
            </div>
        </div>

    )
}

export default Profile