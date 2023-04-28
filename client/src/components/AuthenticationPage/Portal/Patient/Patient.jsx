import React, {useState} from 'react';
import './Patient.css';
import Login from '../Login';
import SignUp from './Signup';

function Patient() {

  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    console.log(data);
    setFormData(data);
  }

  return (
    <>
        {/* <Login name={"Patient"} onSubmit={handleFormSubmit}/> */}
        <SignUp/>
        {formData && (
          <div>
            <p>Form data:</p>
            <p>Patient email : {formData.email}</p>
            <p>Patient password : {formData.password}</p>
          </div>
        )}
    </>
  );
}

export default Patient;
