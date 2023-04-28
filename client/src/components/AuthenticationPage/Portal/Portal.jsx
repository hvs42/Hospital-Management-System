import React, { useState } from "react";
import "./Portal.css";
import Buttons from "./Buttons";
import Doctor from "./Doctor/Doctor";
import Patient from "./Patient/Patient";

function Portal() {
  const [logname, setLogName] = useState("");

  return (
    <div className="login-container portal-container">
      {logname === "" ? (
        <Buttons setLogName={setLogName} />
      ) : logname === "doctor" ? (
        <Doctor />
      ) : (
        <Patient />
      )}
    </div>
  );
}

export default Portal;
