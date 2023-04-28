import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portal from './Portal/Portal';
// import DoctorLogin from './DoctorLogin';
// import PatientLogin from './PatientLogin';
// import Signup from './Signup';
import logo from './temp/loginimg.png';
import './Authentication.css';

function Authentication() {
  return (
      <div className="container no-padding">
        <div className="row">
          <div className="col-md-6 col-sm-12 img-fluid-div">
              <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-6 col-sm-12 img-fluid-div">
            <Portal/>
          </div>
        </div>
      </div>
  );
}

export default Authentication;
