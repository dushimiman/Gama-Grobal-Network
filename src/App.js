import React from 'react';
import Home from './View/home';
import AboutUs from './View/About';
import Service from './View/Service';
import Prize from './View/Prize';
import ContactUs from './View/ContactUs';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/prize' element={<Prize/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
