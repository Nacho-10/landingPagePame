import React from 'react'
import SocialIconsMood from '../SocialIconsMood/SocialIconsMood';

import './Nav.css';

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>Home</li>
            <li>Sobre Mi</li>
            <li>Habilidades</li>
            <li>Servicios</li>
            <li>Contactame</li>
            <li className="mood"><SocialIconsMood/></li>
            <li></li>
        </ul>
    </nav>
  )
}


export default Nav;

const MoodDay = document.querySelector(".mood");
const MoodNight = document.querySelector("#body");

MoodDay.addEventListener('click' , () => {
  MoodNight.classList.toggle('moodChange')
});


