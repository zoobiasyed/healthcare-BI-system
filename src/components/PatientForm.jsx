import React, { useState } from 'react';
import '../css/CreateDocAcc.css';

const PatientForm = ({ onCreatePatient }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [patientID, setPatientID] = useState('');
    const [patienPassword, setpatienPassword] = useState('');

    const generateRandomID = () => {
        const prefix = "pt";
        const randomNumbers = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number
        const id = `${prefix}${randomNumbers}`;
        setPatientID(id);
    };
    const generateRandomPassword = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
        let generatedPassword = "";
        for (let i = 0; i < 8; i++) {
            generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setpatienPassword(generatedPassword);
    };



    const handleSubmit = () => {
        const newPatient = {
            patientID,
            name: `${firstName} ${lastName}`,
            email,
            contact,
    
        };
        onCreatePatient(newPatient);
    };

    return (
        <div className="div-19 createDoctorForm">
            <div className="profile-section">
                <div className="profile-details">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="first-name">First Name*</label>
                            <input type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="last-name">Last Name*</label>
                            <input type="text" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="contact">Contact*</label>
                            <input type="text" id="contact" value={contact} onChange={e => setContact(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="patientID">AHC Card NO</label>
                            <input type="text" id="patientID" value={patientID} readOnly onClick={generateRandomID} />
                        </div>

                        <div className="col">
                            <label htmlFor="patientPassword">Patient Password</label>
                            <input type="text" id="patienPassword" value={patienPassword} readOnly onClick={generateRandomPassword} />
                        </div>


                    </div>
                    

                </div>
            </div>
            <button className="div-57" type="button" onClick={handleSubmit}>Create Account</button>
        </div>
    );
};

export default PatientForm;
