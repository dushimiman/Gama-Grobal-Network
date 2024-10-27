import React from 'react';
import Home from './View/home';
import AboutUs from './View/About';
import Service from './View/Service';
import Prize from './View/Prize';
import ContactUs from './View/ContactUs';
import ApplicationForm from './View/ApplicationForm';
import RegistrationForm from './View/Register';
import InternationalRegister from './View/InternationalRegister';
import International from './View/International';


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
        <Route path='/ApplicationForm' element={<ApplicationForm/>} />
        <Route path='/register' element={<RegistrationForm/>} />
        <Route path='/registerforInternationalInternship' element={<InternationalRegister/>} />
        <Route path='/InternationalInternship' element={<International/>} />
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
