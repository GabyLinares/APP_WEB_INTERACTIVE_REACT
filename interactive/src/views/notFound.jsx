import React, { useState } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../componentes/Navbar";
import { Header } from "../componentes/Header";
import { Footer } from "../componentes/Footer";
import { Barra } from "../componentes/BarraMitad";
import homeimage from "../assets/images/home-image.png";
import "bootstrap/dist/css/bootstrap.css";

export const NotFound = () => {
  return (
    <div className="homepage">
      <ReactTitle title="Interactive Light Mosaico" />
      <Navbar />
      <Header />
      <Barra titulo="Error 404"/>
      {/* carrusel falta */}
      <div class="main">
        <p>
            ¡Lo sentimos! No se ha encontrado la página que buscas</p>
    </div>

      <Footer/>
    </div>
  );
};
