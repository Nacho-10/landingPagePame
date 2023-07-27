import React from 'react';
import Img from './Images/selfpame.png'

import './MainImage.css';

const MainImage = () => {
  return (
    <div className= "imagen-container">
        <img className="imagen" src={Img} alt="imagen"></img>
    </div>
  )
}

export default MainImage