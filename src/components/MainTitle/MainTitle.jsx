import React from "react";
import {IoMdArrowDropdownCircle} from 'react-icons/io';

import "./MainTitle.css";

const MainTitle = () => {
  return (
    <section>
      <div className="titles">
        <h1>Hola, soy Pamela</h1>
        <h5>Comunnity Manager</h5>
      </div>
      <p>
        Profesional, altamente capacitada para la creación, mantenimiento y
        crecimiento de la presencia digital de una entidad
      </p>
      <button className="button">Contactame <IoMdArrowDropdownCircle/></button>
    </section>
  );
};

export default MainTitle;
