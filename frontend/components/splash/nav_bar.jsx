import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div className="nav-bar-contrast-holder">
    <div className='nav-bar-contrast'></div>
    <nav className='nav-bar'>
      <div className='nav-container'>
        <ul id='splash-nav'>
          <li>
            <img className='logo'
               src='https://res.cloudinary.com/flikr/image/upload/v1478498324/logo3_vehkaq.svg'>
            </img>
          </li>
          <Link to='signup'className='photo-upload' id='splash-sign-up'>
            Sign Up
          </Link>
          <Link to='/signin' className='splash-signin'>Sign in</Link>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;
