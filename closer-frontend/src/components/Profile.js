import React from 'react'

const Profile = () => {
    function change(x) {
        let tst = '';
        console.log(x);
        x.classList.toggle("change");
        tst = document.getElementsByClassName('button-logout')[0];
        tst.classList.toggle("button-logout-shown")
    }
    return (
        <div className='profile-logout'>
            <div className='profile'>
                <img src={require("../assets/blankprofile.png")} alt=""></img>
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