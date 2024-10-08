import React from "react";
import "../css/AdminDashboardDoctorStyles.css";
import { useNavigate } from "react-router-dom";

import Header from "./Header";

function AdminDashboardDoctor({ doctors = [] }) {
  console.log("Doctors data:", doctors);
  const navigate = useNavigate();

  const redirectToCreateDoctor = () => {
    navigate("/AdminDashboardDoctor/CreateDoctorAcc");
    console.log("Doctors data:", doctors);
  };

  return (
    <>
      <div className="column-2">
        <div className="div-19">
          <Header name="Doctor Management"></Header>
          <div id="createNewButton">
            <button className="div-25" onClick={redirectToCreateDoctor}>
              {/* <NavLink to='/CreateDoctorAcc'>Create New +</NavLink> */}
              Create New +
            </button>
          </div>

          <div className="div-26">
            <table className=" doctors-table">
              <thead className="thead">
                <tr className="tr">
                  <th className="doctors-table_th">Doctor ID</th>
                  <th className="doctors-table_th">Name</th>
                  <th className="doctors-table_th">Fellowship</th>
                  <th className="doctors-table_th">Department</th>
                  <th className="doctors-table_th">Actions</th>
                </tr>
              </thead>
              <tbody id="doctorTableBody" className="tbody">
                {doctors.map((doctor, index) => (
                  <tr className="tr" key={index}>
                    <td className="doctors-table_th">{doctor.identificationNo}</td>
                    <td className="doctors-table_th">{doctor.name}</td>
                    <td className="doctors-table_th">{doctor.fellowship}</td>
                    <td className="doctors-table_th">{doctor.department}</td>
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
    </>
  );
}

export default AdminDashboardDoctor;

//////////////////////////////////////////////////////////////////////////////////////////////
