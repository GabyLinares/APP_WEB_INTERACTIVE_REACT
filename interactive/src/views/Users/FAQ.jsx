import React, { useState } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import "bootstrap/dist/css/bootstrap.css";


export const FAQ = () => {
  return (
    <div className="loginpage">
      <ReactTitle title="FAQ" />
      <Navbar />
      <Header />
      <Barra titulo="Preguntas frecuentes"/>
      <div className="wrapper">
      <div className="image-wrapper">
        <img src="https://cdn-icons-png.flaticon.com/512/46/46216.png" alt="ficha rompecabezas" />
        <div className="pregunta-obj">
          <div className="pregunta-wrapper">
            <p className="pregunta">¿Dónde se encuentra ubicado el parque interactivo?</p>
          </div>
          <p className="respuesta">Tenemos varias ubicaciones en la ciudad de Bogotá y alrededores, nos encontramos en el centro comercial Centro Chía, San Rafael e Iserra 100.</p>
        </div>
      </div>

      <div className="image-wrapper image-par">
        <img src="https://cdn-icons-png.flaticon.com/512/46/46216.png" alt="ficha rompecabezas" />
        <div className="pregunta-obj">
          <div className="pregunta-wrapper">
            <p className="pregunta">¿Cuáles son los horarios de operación del parque?</p>
          </div>
          <p className="respuesta">Operamos de 9 am a 6 pm.</p>
        </div>
      </div>

      <div className="image-wrapper">
        <img src="https://cdn-icons-png.flaticon.com/512/46/46216.png" alt="ficha rompecabezas" />
        <div className="pregunta-obj">
          <div className="pregunta-wrapper">
            <p className="pregunta">¿Puedo reservar un espacio para celebrar fiestas de cumpleaños u otros eventos en el parque?</p>
          </div>
          <p className="respuesta">¡Claro! Ofrecemos paquetes para que celebres tu día especial de la mejor manera.</p>
        </div>
      </div>

      <div className="image-wrapper image-par">
        <img src="https://cdn-icons-png.flaticon.com/512/46/46216.png" alt="ficha rompecabezas" />
        <div className="pregunta-obj">
          <div className="pregunta-wrapper">
            <p className="pregunta">¿Se permite la entrada de alimentos y bebidas desde el exterior?</p>
          </div>
          <p className="respuesta">No se permite el ingreso al parque con bebidas o alimentos.</p>
        </div>
      </div>
    </div>


      <Footer/>
    </div>
  );
};
