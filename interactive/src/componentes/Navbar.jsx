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
        <a href="/inicio">
          <img src={fichaInicio} alt=""></img>
        </a>
      </div>

      <div className="ficha">
        <a href="/catalogo">
          <img src={fichaCatalogo} alt=""></img>
        </a>
      </div>

      <div className="ficha">
        <a href="/contacto">
          <img
            src={fichaContacto}
            alt=""
          ></img>
        </a>
      </div>

      <div className="ficha">
        <a href="/FAQ">
          <img src={fichaFAQ} alt=""></img>
        </a>
      </div>

      <div className="ficha">
        <a href="/login">
          <img src={fichaSesion} alt=""></img>
        </a>
      </div>
    </div>
  );
};
