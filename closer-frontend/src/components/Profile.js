import React from 'react'

const Profile = () => {
    function change(x) {
        console.log(x);
        x.classList.toggle("change");
    }
    return (
        <div className='profile'>
            <img src={require("../assets/blankprofile.png")}></img>
            <div className="container" onClick={(e) => { change(e.currentTarget) }}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div >
    )
}

export default Profile