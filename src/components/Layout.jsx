
import { Outlet } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';


function Layout() {
  return (
    

    <div className="div">
     
      <div className="div-2">
        <AdminSideBar></AdminSideBar>
        
          <Outlet/>
       
        
      </div>
    </div>
  );
}

export default Layout;
