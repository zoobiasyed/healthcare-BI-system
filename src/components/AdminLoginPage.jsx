// import React, { useState } from 'react';
// import loginPgImg from "../assets/loginPgImg.jpg";
// import '../css/adminlogin.css';


// const AdminLoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if ((username.trim() === '' || password.trim() === '') && mobile.trim() === '') {
//       alert('Please enter username/password or mobile for OTP login.');
//       return;
//     }

//     if (mobile.trim() !== '') {
//       alert(`Logging in with OTP for mobile: ${mobile}`);
//       // Redirect to the dashboard page
//       window.location.href = 'adminDashboard.html';
//     } else {
//       alert(`Logging in with username: ${username} and password: ${password}`);
//       // Redirect to the dashboard page
//       window.location.href = 'adminDashboard.html';
//     }

//     if (rememberMe) {
//       localStorage.setItem('rememberMe', 'true');
//     } else {
//       localStorage.removeItem('rememberMe');
//     }

//     // Clear form fields after submission
//     setUsername('');
//     setPassword('');
//     setMobile('');
//     setRememberMe(false);
//   };

//   const handleForgotPassword = (event) => {
//     event.preventDefault();
//     alert('Forgot password functionality is not implemented yet.');
//   };

//   const handleSignup = () => {
//     alert('Signup functionality is not implemented yet.');
//   };

//   return (
//     <div>
//       <header>
//         <div className="logo">
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=2000 2000w"
//             className="img-9"
//             alt="Logo"
//           />
//           <div className="div-20">Empowering Better Care</div>
//         </div>
//       </header>
//       <main>
//         <div className="content">
//           <div className="quote-section">
//             <p>Welcome Admin</p>
//             <img src={loginPgImg} alt="Healthcare" />
//           </div>
//           <div className="login-section">
//             <h4 className="h1">Welcome admin!</h4>
//             <p className="h1 para">Please Login to your Account</p>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="username"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <p className="otp">Or Login with OTP</p>
//               <div className="form-group otp-group">
//                 <input
//                   type="text"
//                   id="mobile"
//                   placeholder="Mobile"
//                   value={mobile}
//                   onChange={(e) => setMobile(e.target.value)}
//                 />
//               </div>
//               <div className="form-group remember-me">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 <label htmlFor="remember">Remember Me</label>
//                 <a href="#" className="forgot-password" onClick={handleForgotPassword}>
//                   Forgot Password
//                 </a>
//               </div>
//               <div className="form-buttons">
//                 <button type="submit" className="login-button">LOGIN</button>
//                 <button type="button" className="signup-button" onClick={handleSignup}>SIGNUP</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminLoginPage;

//////////////////////////////////////////////////////////////////


import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import loginPgImg from "../assets/loginPgImg.jpg";
import '../css/adminlogin.css';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if ((username.trim() === '' || password.trim() === '') && mobile.trim() === '') {
      alert('Please enter a username and password, or a mobile number for OTP login.');
      return;
    }

    if (mobile.trim() !== '') {
      // alert(`Logging in with OTP for mobile: ${mobile}`);
      // Redirect to the dashboard page
      navigate('/adminDashboard'); // Use navigate instead of window.location.href
    } else {
      alert(`Logging in with username: ${username} and password: ${password}`);
      // Redirect to the dashboard page
      navigate('/adminDashboard'); // Use navigate instead of window.location.href
    }

    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberMe');
    }

    // Clear form fields after submission
    setUsername('');
    setPassword('');
    setMobile('');
    setRememberMe(false);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    alert('Forgot password functionality is not implemented yet.');
  };

  const handleSignup = () => {
      navigate("/signup");
    };

  return (
    <div>
      <center>
      <header className='Adminheader'>
     
        <div className="Adminlogo">
         
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&width=2000 2000w"
            className="img-9"
            alt="Logo"
          />
          <div className="div-20">Empowering Better Care</div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li></li>
            <li></li>
            
            
          </ul>
        </nav>
      </header>
      </center>
      <main>
        <div className="content">
          <div className="quote-section">
            <p>Welcome Admin</p>
            <img src={loginPgImg} alt="Healthcare" />
          </div>
          <div className="login-section">
            <h4 className="h1">Welcome admin!</h4>
            <p className="h1 para">Please Login to your Account</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="otp">Or Login with OTP</p>
              <div className="form-group otp-group">
                <input
                  type="text"
                  id="mobile"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember Me</label>
                <a href="#" className="forgot-password" onClick={handleForgotPassword}>
                  Forgot Password
                </a>
              </div>
              <div className="form-buttons">
                <button type="submit" className="login-button">LOGIN</button>
                <button type="button" className="button" onClick={handleSignup}>SIGNUP</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLoginPage;
