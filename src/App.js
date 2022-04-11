import React from 'react';
import { Route, Routes } from 'react-router'
// components
import Nav from './Components/Nav';
// pages
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

