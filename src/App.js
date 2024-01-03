import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';

import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div >
        <GoToTop/>
        <Header />
        <Home/> 
        <Stats/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        {/* <Projects/> */}


        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
