import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useUserStore } from '../store/UserStore'
import axios from 'axios'
const TopHosts = () => {
    const [topHosts, setTopHosts] = useState([]);
    const usertype = useUserStore((state) => state.usertype);
    function getTopHosts() {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/topHosts"
        }).then(function (response) {
            setTopHosts(response.data.data.top_host);
        }).catch(function (err) {

        })
    }


    useEffect(() => { getTopHosts() }, [])

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
            className='tophosts-main-container'>
            <div>
                <Navbar usertype={usertype} />
            </div>

            {topHosts.map(topHost =>
            (<div className='host-info-container'>
                <div className='host-info'>
                    <div className='host-info-title'>
                        <div className='left-title'>
                            <div>
                                {topHost.first_name}
                            </div>
                            <div className='family'>
                                {topHost.last_name}
                            </div>

                        </div>
                        <div className='right-title'>
                            {topHost.cat_name}
                        </div>

                    </div>
                    <div className='stats-container'>
                        <div className='stats-subcontainer'>
                            <div className='stats'>

                                <div>
                                    <img src={topHost.profile_picture} alt=""></img>
                                </div>
                            </div>
                            <div className='stats-number'>
                                <div className='total-attendees'>
                                    <div className='total-attendees-title'>
                                        Total attendees
                                    </div>
                                    <div>
                                        {topHost.Total}
                                    </div>

                                </div>
                                <div className='vl' />
                                <div className='total-events'>
                                    <div className='total-events-title'>
                                        Total events
                                    </div>
                                    <div>
                                        {topHost.nbrEvents}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>))}



        </motion.div >
    )

}

export default TopHosts