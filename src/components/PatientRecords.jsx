
import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/AdminDashboardDoctorStyles.css';
import Header from './Header';

function PatientRecords({ patients = [] }) {
    const navigate = useNavigate();

    const redirect = () => {
        // Redirect logic here
        navigate("/PatientRecords/CreatePatientAcc");
    };

    return (
        
                <div className="column-2">
                    <div className="div-19">

                        <Header name='Patient Management'></Header>
                        <div id="createNewButton">
                            <button className="div-25" onClick={redirect}>Create New +</button>
                        </div>
                        <div className="div-26">
                            <table className="doctors-table">
                                <thead className="thead">
                                    <tr className="tr">
                                        <th className="doctors-table_th">AHC Card No            </th>
                                        <th className="doctors-table_th">Name</th>
                                        <th className="doctors-table_th">Email</th>
                                        <th className="doctors-table_th">Contact</th>
                                        <th className="doctors-table_th">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="doctorTableBody" className="tbody">
                                    {/* Dynamic rows will go here */}
                                    {patients.map((patient, index) => (
                                <tr className="tr" key={index}>
                                    <td className="doctors-table_th">{patient.patientID}</td>
                                    <td className="doctors-table_th">{patient.name}</td>
                                    <td className="doctors-table_th">{patient.email}</td>
                                    <td className="doctors-table_th">{patient.contact}</td>
                                    <td className="doctors-table_th">
                                        <a href="#" className="edit">
                                            <i className="fas fa-edit"></i> Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
       
    );
}

export default PatientRecords;