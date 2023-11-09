import React, { useState } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../componentes/Navbar";
import { Header } from "../componentes/Header";
import { Footer } from "../componentes/Footer";
import { Barra } from "../componentes/BarraMitad";
import homeimage from "../assets/images/home-image.png";
import "bootstrap/dist/css/bootstrap.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <ReactTitle title="Interactive Light Mosaico" />
      <Navbar />
      <Header />
      <Barra titulo="Bienvenido a Interactive Light Mosaico"/>
      {/* carrusel falta */}
      <div class="main">
        <p>
            ¡Bienvenido a Interactive Park! Somos un destino único que combina diversión y aventura en un entorno
            emocionante y seguro. Con una amplia gama de atracciones y actividades diseñadas para todas las edades,
            estamos comprometidos en brindar experiencias inolvidables para cada miembro de la familia.</p>

        <img src={homeimage} width="600px"></img>
    </div>

      <Footer/>
    </div>
  );
};
