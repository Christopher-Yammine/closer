
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import VideoBg from './components/VideoBg';
import Splash from './pages/Splash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />}></Route>
        <Route path='/video' element={<VideoBg />}></Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
