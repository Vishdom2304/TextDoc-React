// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';


function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = "#1c1d1f";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextDoc" abtText="About TextDoc" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm heading="Enter the text to be analysed here" mode={mode} />} />
        </Routes>
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
