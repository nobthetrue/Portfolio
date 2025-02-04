import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import ProjectPage from './pages/Projet';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Formation from './pages/Formation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path="/projet" element={<ProjectPage />} />
        {/* <Route path='/Formation' element={<Formation/>} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
