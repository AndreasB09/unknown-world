// import { useState } from 'react'
import './App.css'
//import Header from './components/Header/Header.jsx'
//import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FactionOne from './pages/FactionOne/FactionOne.jsx';
import FactionTwo from './pages/FactionTwo/FactionTwo.jsx';
import FactionThree from './pages/FactionThree/FactionThree.jsx';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faction-one" element={<FactionOne />} />
        <Route path="/faction-two" element={<FactionTwo />} />
        <Route path="/faction-three" element={<FactionThree />} />
      </Routes>
    </Router>
  );
}

export default App
