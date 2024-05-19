import React, { useState, useEffect } from "react";
import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { api_rout_url } from "../../../utils/Constants";
import { faBars, faClock, faClose, faSignOut } from "@fortawesome/free-solid-svg-icons"; 

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeDevice, setIsLargeDevice] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   
  const handlelogout = async () => {
    try {
      const response = await fetch(`${api_rout_url}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      
      if (response.ok) {
        sessionStorage.removeItem('userId');
        window.location.href ="/login";
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  useEffect(() => {
    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 1200);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize event

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <div className="dropdown">
      {!isLargeDevice && (
        <FontAwesomeIcon
          icon={!isOpen ? faBars : faClose}
          className="cursor-pointer text-white mr-4"
          onClick={toggleMenu}
        />
      )}
      {isOpen && (
        <div className="dropdown-content">
          <a href="/">Home</a>
          <a href="/In-house">Programs</a>
          <a href="/udemy">udemy</a>
          <a href="/book">Book-Meet</a>
          <a href="/collab">collab</a>
          <a href="/vapt">Vapt</a>
          <a href="/other">Other</a>
          <a href="/tc">Terms & condtion</a>
          < p onClick={handlelogout}> <FontAwesomeIcon icon={faSignOut } /> Logout</p>
          
          
         
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
