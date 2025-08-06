import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

const Auth = () => {
  return (
    <div className='navbar'>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#"><b>Profile</b></a>
        </li>
        <li className="nav-item">
         <Link to="/login" className="nav-link"><b>Log-in</b></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><b>Sign-in</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"><b>Logout</b></a>
        </li>
      </ul>
    </div>
  );
};

export default Auth;

