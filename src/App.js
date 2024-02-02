import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div>
        <GoToTop />
        <Header />
        <Home />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
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

// import React, { useState } from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSendEmail = () => {
//     const mailtoLink = `mailto:selvarajnirmalraj@gmail.com?subject=${encodeURIComponent('New Contact Form Submission')}&body=${encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`)}`;
// console.log(mailtoLink)
//     window.location.href = mailtoLink;
//   };

//   return (
//     <div>
//       <h1>Contact Form</h1>
//       <form>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Message:
//           <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//         </label>
//         <br />
//         <button type="button" onClick={handleSendEmail}>
//           Send Email
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;
