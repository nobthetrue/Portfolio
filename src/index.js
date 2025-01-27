import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
