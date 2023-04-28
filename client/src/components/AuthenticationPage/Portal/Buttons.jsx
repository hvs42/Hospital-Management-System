import React from 'react';
import { FaUserMd, FaUser } from 'react-icons/fa';
import './Portal.css';

function Buttons(props) {

    function handleDoctorClick(e)
    {
        props.setLogName("doctor");
    }

    function handlePatientClick(e)
    {
        props.setLogName("patient");
    }

  return (
    <div className="buttons-container">
      <button onClick={handleDoctorClick} className="btn btn-primary btn-doctor">
        <FaUserMd className="icon-doctor" />
        <span>Doctor</span>
      </button>
      <button onClick={handlePatientClick} className="btn btn-primary btn-patient">
        <FaUser className="icon-patient" />
        <span>Patient</span>
      </button>
    </div>
  );
}

export default Buttons;
