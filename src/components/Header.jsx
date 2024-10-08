import React from 'react';
// import "../css/Header.css"

function Header(props) {
  return (
    <div >
      <center>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91d94a2248f315e5645f0ddaeb4410a4fe1c4da13b82787ad00da8a87fd0ee1?apiKey=25b957d3db53419f881a9efe72b830ae&"
        alt="Empowering Better Care"
        className="img-9"
      />
      <div className="div-20">Empowering Better Care</div>
      
      </center>
      
      <div className="div-21">
        <div className="div-22">{props.name}</div>

      
          {(props.name === 'Doctor Management' || props.name === 'Patient Management' || props.name === 'Pharmacy Management') && (<div className="div-23">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1ad06efc0dc76e5613999cf39ea2cdbf9291b7facdc62f50622cc9b5f0b03c9?apiKey=25b957d3db53419f881a9efe72b830ae&"
                    className="img-10"
                  />
                  <div className="div-24">Search...</div>
                </div>)}
        


      </div>
      
    </div>
  );
}

export default Header;
