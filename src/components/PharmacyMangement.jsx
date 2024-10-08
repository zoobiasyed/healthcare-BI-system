import React from 'react';

import Header from './Header';
// import '../css/AdminDashboardDoctorStyles.css'
import PharmacyTable from './PharmacyTable';

function PharmacyMangement() {
  return (
  
    <div className="column-2">
          <div className='div-19'>
          <Header name='Pharmacy Management'></Header>
          <PharmacyTable></PharmacyTable>
          </div>
        </div>
  );
}

export default PharmacyMangement;
