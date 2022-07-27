import React from 'react'
import Horizontal from '../components/Horizontal';
import Events from '../pages/Events';
import Host from '../pages/Host';
import Landingpage from '../pages/Landingpage';
import Splash from '../pages/Splash';
import TopHosts from '../pages/TopHosts';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Event from '../pages/Event';
import AdminPanel from '../pages/AdminPanel';
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Splash />}></Route>
                <Route path='/video' element={<Horizontal />}></Route>
                <Route path='/landingpage' element={<Landingpage />}></Route>
                <Route path='/events' element={<Events />}></Route>
                <Route path='/top-hosts' element={<TopHosts />}></Route>
                <Route path='/your-event' element={<Host />}></Route>
                <Route path='/event' element={<Event />}></Route>
                <Route path='/admin' element={<AdminPanel />}></Route>
            </Routes >
        </AnimatePresence>
    )
}

export default AnimatedRoutes