
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Horizontal from './components/Horizontal';
import VideoBg from './components/VideoBg';
import Landingpage from './pages/Landingpage';
import Splash from './pages/Splash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />}></Route>
        <Route path='/video' element={<Horizontal />}></Route>
        <Route path='/landingpage' element={<Landingpage />}></Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
