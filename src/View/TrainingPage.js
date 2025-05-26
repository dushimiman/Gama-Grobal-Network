import React from 'react';
import Navbar from './Components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './RegistrationForm.css';

const TrainingPage = () => {
  return (
    <>
      <header className="main-header clearfix" role="banner">
        <Navbar />
      </header>
<br></br>
<br></br>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
           Training Program
        </h1>
        <p className="text-gray-600 mb-6">
          Organized by <strong>Gama Global Network</strong>
        </p>

        
        <h2 className="text-xl font-semibold mb-2">Why Choose This Training?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Hands-on and practical approach tailored to real-world challenges</li>
          <li>Flexible schedules for both in-person and online learners</li>
          <li>Interactive sessions with expert trainers and peer-to-peer networking</li>
          <li>Open to all skill levels, including beginners and slow learners</li>
        </ul>

        <div className="text-center mt-8">
         <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSf_crLnqlVfl2Z6kwteTyqRJXJkemcjgxoZAfw-JneeL014lw/viewform?usp=send_form"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
>
  Apply Now
</a>

        </div>
      </div>
    </>
  );
};

export default TrainingPage;
