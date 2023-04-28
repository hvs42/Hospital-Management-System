import React, {useState} from 'react';
import './Doctor.css';
import Login from '../Login';

function Doctor() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    console.log(data);
    setFormData(data);
  }

  return (
    <>
        <Login name={"Doctor"} onSubmit={handleFormSubmit} />
        {formData && (
          <div>
            <p>Form data:</p>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
    </>
  );
}

export default Doctor;
