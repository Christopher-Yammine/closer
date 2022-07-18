
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Horizontal from './components/Horizontal';
import Events from './pages/Events';
import Host from './pages/Host';
import Landingpage from './pages/Landingpage';
import Splash from './pages/Splash';
import TopHosts from './pages/TopHosts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />}></Route>
        <Route path='/video' element={<Horizontal />}></Route>
        <Route path='/landingpage' element={<Landingpage />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/top-hosts' element={<TopHosts />}></Route>
        <Route path='/your-event' element={<Host />}></Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
