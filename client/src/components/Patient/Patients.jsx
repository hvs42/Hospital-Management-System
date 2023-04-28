import React, { useEffect } from 'react';

function Patients()
{
    useEffect(()=>{
        console.log("Patient");
    }, [])
    return(
        <>
        <h1> this is patient</h1>
        </>
    )
}

export default Patients;