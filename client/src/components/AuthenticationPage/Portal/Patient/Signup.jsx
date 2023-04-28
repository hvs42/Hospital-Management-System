import React, { useState } from "react";
import "../Portal.css";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && email && password && age && contactNumber && address && bloodGroup && dob) 
    {
      props.onSubmit({name,email, password, age, contactNumber, address, bloodGroup, dob});

      setName("");
      setEmail("");
      setPassword("");
      setAge("");
      setContactNumber("");
      setAddress("");
      setBloodGroup("");
      setDob("");
    }
  };

  return (
    <div className="signup-form-container">
      <h2>{props.name} Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email address</label> */}
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="age">Age</label> */}
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="contactNumber">Contact Number</label> */}
          <input
            type="text"
            className="form-control"
            id="contactNumber"
            placeholder="Enter contact number"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="address">Address</label> */}
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="bloodGroup">Blood Group</label> */}
          <input
            type="text"
            className="form-control"
            id="bloodGroup"
            placeholder="Enter blood group"
            value={bloodGroup}
            onChange={(event) => setBloodGroup(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="dateOfBirth">Date of Birth</label> */}
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
