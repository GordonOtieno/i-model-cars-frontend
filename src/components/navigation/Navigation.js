import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaTwitter, FaFacebook, FaInstagram, FaGoogle,
} from 'react-icons/fa';
import { RiPinterestFill } from 'react-icons/ri';
import carLogo from './car_logo.webp';
import './navigation.css';
import isUserSigned from '../../helpers/auth';

const Navigation = () => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={carLogo} alt="i-model car logo" style={{ height: '50px', width: '100px' }} />
      </div>
      <div className="sidebar-content">
        <Link to="/"><li>CARS</li></Link>
        <Link to="/reservations/new"><li>RESERVE</li></Link>
        <Link to="/reservations"><li>MY RESERVATIONS</li></Link>
        <Link to="/new-car"><li>ADD CARS</li></Link>
        <Link to="/delete-car"><li>DELETE CARS</li></Link>
      </div>
      {isUserSigned() && (
        <div className="signout-buttn"><button type="button" onClick={signOut}>Sign out</button></div>
      )}
      <div className="social-icons">

        <FaTwitter />

        <FaFacebook />

        <FaGoogle />

        <FaInstagram />

        <RiPinterestFill />

      </div>
      <span id="copyright"><i>&copy; Amine, Okei & Gordon</i></span>
    </div>
  );
};

export default Navigation;
