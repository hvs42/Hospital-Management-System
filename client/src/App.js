import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Patients from './components/Patient/Patients';
import Doctors from './components/Doctor/Doctors';
import Appointments from './components/Appointments/Appointments';
import Authentication from './components/AuthenticationPage/Authentication';

const App = () => {
  return (
    <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/patients" element={ <Patients/> } />
            <Route path="/doctors" element={ <Doctors/> } />
            <Route path="/appointments" element={ <Appointments/> } />
            <Route path="/Login" element={ <Authentication/> } />
          </Routes>
    </Router>
  );
};

export default App;
