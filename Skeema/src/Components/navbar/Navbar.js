import React from "react";
// import "./Navbar.css";

function Navbar() {


  return (
    <>
      <div className="justify-between  fixed w-full flex   p-3  ">
        <div className="w-28">
          <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/63200f5593e491dbf5e18c8e_image3-p-500.png" alt="Logo" />
        </div>
        <div>
          <div>
            <button type="button" className="rounded-full p-2 bg-transparent border-black">
              Get Started
            </button>
          </div>
        </div>
    
      
      </div>

      
    </>
  );
}

export default Navbar;
