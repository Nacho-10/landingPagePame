import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';

import './MainIcons.css';

const MainIcons = () => {
  return (
    <div className="icons">
        <li><FaLinkedin/></li>
        <li><FaInstagram/></li>
        <li><FaFacebookSquare/></li>
        <li><FaWhatsapp/></li>
    </div>
  )
}

export default MainIcons