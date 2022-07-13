
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Splash from './pages/Splash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />}></Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
