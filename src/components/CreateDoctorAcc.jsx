import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import DoctorForm from './DoctorForm';
import "../css/CreateDocAcc.css";



const CreateDoctorAcc = ({ addDoctor }) => {

    const navigate = useNavigate();

    const handleCreateDoctor = (doctor) => {
      addDoctor(doctor);
      navigate('/AdminDashboardDoctor');
    };



    return (
        <>
     {/* <div className="div">
            <div className="div-2">
               <SideBar></SideBar> */}
        
                <div className="column-2">
                    <Header name='Create New Doctor Account'></Header>
                    <DoctorForm  onCreateDoctor={handleCreateDoctor}></DoctorForm>
                    
                </div>
          {/* </div>
        </div> */}

       </> 
    );
};

export default CreateDoctorAcc;


//////////////////////////////////////////////////////////////////////////////////////////////////

