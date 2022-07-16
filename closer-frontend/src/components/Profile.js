import React from 'react'

const Profile = () => {
    function change(x) {
        console.log(x);
        x.classList.toggle("change");
    }
    return (
        <div className='profile'>
            <img src={require("../assets/blankprofile.png")}></img>
            <div class="container" onClick={(e) => { change(e.currentTarget) }}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
    )
}

export default Profile