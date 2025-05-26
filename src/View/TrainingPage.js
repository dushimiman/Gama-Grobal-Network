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

      <section className="training-section py-5">
        <div className="container bg-white shadow-lg rounded-lg p-5">
          <h1 className="text-4xl font-bold text-[#0033a0] mb-4 text-center">
            Training Program
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            Organized by <strong>Gama Global Network</strong><br />
            <em>(Click on Apply Now for this month’s program details)</em>
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-[#0033a0]">Why Choose This Training?</h2>
          <ul className="list-disc pl-5 text-gray-800 space-y-2">
            <li>✅ Hands-on and practical approach tailored to real-world challenges</li>
            <li>✅ Flexible schedules for both in-person and online learners</li>
            <li>✅ Interactive sessions with expert trainers and peer-to-peer networking</li>
            <li>✅ Open to all skill levels, including beginners and slow learners</li>
          </ul>

          <div className="text-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_crLnqlVfl2Z6kwteTyqRJXJkemcjgxoZAfw-JneeL014lw/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0033a0] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingPage;
