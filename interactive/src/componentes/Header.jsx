import React from "react";
import logo from '../assets/images/logo.png';

export const Header = () => {
  return (
    <div class="header">
        <img src={logo} alt="Logo del Parque Interactivo" class="logo"></img>
        <h3 class="descripcion-header"> Un lugar lleno de diversión y aventuras para toda la familia</h3>
    </div>
  );
};