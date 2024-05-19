import React from "react";
import logo from "../../../images/logo.png";
import "./Footer.css";
import '../../Home/Home.css'

const Footer = () => {
  return (  <div>
  
  <div className="divider"></div>

    <footer id="footer">
    
      <div className="leftFooter">
        <img src={logo} alt="logo"  />
      </div>

      <div className="midFooter">
        <h3>Quick Links</h3>
        <a href="/"><p className= "text-gray-500 hover:text-blue-400" >Home</p></a>
      <a href='/vapt'> <p className= "text-gray-500 hover:text-blue-400">VAPT</p></a> 
      <a href='/In-house'> <p className= "text-gray-500 hover:text-blue-400">Courses</p></a> 
      <a href='/other'><p className= "text-gray-500 hover:text-blue-400"> Other Services</p></a> 
      <a href='/tc'><p className= "text-gray-500 hover:text-blue-400">T & C </p></a>
      </div>

      <div className="midFooter">
        <h3>Contact Us -</h3>
        <p>Email - contact.nexussec@gmail.com</p>
        <p>Phone - +91 7973454063</p>
      </div>

      <div className="rightFooter">
        <h3>Follow Us</h3>

       <a href="https://www.linkedin.com/company/nexus-sec/"> <img src="https://campalin.com/Courses/social%20icons/linkedin.png"  style={{height:"40px", width:"40px"}}></img></a>
                  
      </div>
    </footer>

    </div>

  );
};

export default Footer;
