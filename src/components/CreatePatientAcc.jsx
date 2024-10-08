import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import PatientForm from './PatientForm';
import "../css/CreateDocAcc.css";



const CreatePatientAcc = ({ addPatient }) => {

    const navigate = useNavigate();

    const handleCreatePatient = (patient) => {
      addPatient(patient);
      navigate('/adminDashboardPatientRecord');
    };



    return (
        <>
     {/* <div className="div">
            <div className="div-2">
               <SideBar></SideBar> */}
        
                <div className="column-2">
                    <Header name='Create New Patient Account'></Header>
                    <PatientForm  onCreatePatient={handleCreatePatient}></PatientForm>
                    
                </div>
          {/* </div>
        </div> */}

       </> 
    );
};

export default CreatePatientAcc;


//////////////////////////////////////////////////////////////////////////////////////////////////

