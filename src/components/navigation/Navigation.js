import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTwitter, FaFacebook, FaInstagram, FaGoogle,
} from 'react-icons/fa';
import { RiPinterestFill } from 'react-icons/ri';
import carLogo from './car_logo.webp';
import './navigation.css';

const Navigation = () => (
  <div className="sidebar">
    <div className="sidebar-header">
      <img src={carLogo} alt="i-model car logo" style={{ height: '50px', width: '100px' }} />
    </div>
    <div className="sidebar-content">
      <Link to="/"><li className="car-link">CARS</li></Link>
      <Link to="/reservations/new"><li>RESERVE</li></Link>
      <Link to="/reservations"><li>MY RESERVATIONS</li></Link>
      <Link to="/new-car"><li>ADD CARS</li></Link>
      <Link to="/delete-car"><li>DELETE CARS</li></Link>
    </div>
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

export default Navigation;
