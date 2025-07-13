import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className="nav">
        {/* <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="#">Log-in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign-in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

