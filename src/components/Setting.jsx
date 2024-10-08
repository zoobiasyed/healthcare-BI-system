import Header from "./Header";
// import '../css/AdminDashboardDoctorStyles.css';
import "../css/Setting.css";

const Setting = () => {
  return (
    <>
      {/* <div class="div">
        <div class="div-2">
          <SideBar></SideBar> */}
          <div class="column-2">
            <div class="div-19">
              <Header name='Setting'></Header>
              <div class="div1">
                <div class="col1">
                  <div class="text">Email</div>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="col2">
                  <div class="text">Password</div>
                  <input type="password" id="password" name="password" required />
                </div>
              </div>
              <button class="div-251">Edit</button>
            </div>
          </div>
        {/* </div>
      </div> */}
    </>
  )
}
export default Setting;