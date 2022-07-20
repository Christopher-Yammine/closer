import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
const TopHosts = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
            className='tophosts-main-container'>
            <div>
                <Navbar />
            </div>
            <div className='host-info-container'>
                <div className='host-info'>
                    <div className='host-info-title'>
                        <div className='left-title'>
                            <div>
                                chris
                            </div>
                            <div className='family'>
                                yammine
                            </div>

                        </div>
                        <div className='right-title'>
                            Category
                        </div>

                    </div>
                    <div className='stats-container'>
                        <div className='stats-subcontainer'>
                            <div className='stats'>

                                <div>
                                    <img src={require("../assets/blankprofile.png")} alt=""></img>
                                </div>
                            </div>
                            <div className='stats'>
                                <div className='upcoming'>
                                    chris
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
            <div className='host-info-container'>
                <div className='host-info'>
                    <div className='host-info-title'>
                        <div className='left-title'>
                            <div>
                                chris
                            </div>
                            <div className='family'>
                                yammine
                            </div>

                        </div>
                        <div className='right-title'>
                            Category
                        </div>

                    </div>
                    <div className='stats-container'>
                        <div className='stats-subcontainer'>
                            <div className='stats'>

                                <div>
                                    <img src={require("../assets/blankprofile.png")} alt=""></img>
                                </div>
                            </div>
                            <div className='stats'>
                                <div className='upcoming'>
                                    chris
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            <div className='host-info-container'>
                <div className='host-info'>
                    <div className='host-info-title'>
                        <div className='left-title'>
                            <div>
                                chris
                            </div>
                            <div className='family'>
                                yammine
                            </div>

                        </div>
                        <div className='right-title'>
                            Category
                        </div>

                    </div>
                    <div className='stats-container'>
                        <div className='stats-subcontainer'>
                            <div className='stats'>

                                <div>
                                    <img src={require("../assets/blankprofile.png")} alt=""></img>
                                </div>
                            </div>
                            <div className='stats'>
                                <div className='upcoming'>
                                    chris
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>


        </motion.div >
    )
}

export default TopHosts