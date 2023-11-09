import React from "react";
import fichaInicio from '../assets/images/fichainicio.svg';
import fichaCatalogo from '../assets/images/fichacatalogo.svg';
import fichaContacto from '../assets/images/ficharcontacto.svg';
import fichaFAQ from '../assets/images/fichafaq.svg';
import fichaSesion from '../assets/images/fichasesion.svg';

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="ficha">
        <a href="#">
          <img src={fichaInicio} alt=""></img>
        </a>
      </div>

      <div className="ficha">
        <a href="#">
          <img src={fichaCatalogo} alt=""></img>
        </a>
      </div>

      <div className="ficha">
        <a href="#">
          <img
            src={fichaContacto}
            alt=""
          ></img>
        </a>
      </div>

      <div className="ficha">
        <a href="#">
          <img src={fichaFAQ} alt=""></img>
        </a>
      </div>

      <div className="ficha">
        <a href="/inicio">
          <img src={fichaSesion} alt=""></img>
        </a>
      </div>
    </div>
  );
};
