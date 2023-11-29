import React, { useState } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import "bootstrap/dist/css/bootstrap.css";


export const ContactPH = () => {
  return (
    <div className="loginpage">
      <ReactTitle title="Contacto" />
      <Navbar />
      <Header />
      <Barra titulo="Contacto"/>
      <div className="full-wrapper">
      <div className="header-form">
        <h3 className="descripcion-barra">Déjanos tus dudas y comentarios</h3>
      </div>
      <form className="contact">
        <div className="input-group-signup">
          <label htmlFor="nombre">
            Nombre
            <input type="text" className="input-signup" placeholder="Rosita Nuñez" />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" type="email" placeholder="ejemplo@email.com" className="input-signup" />
          </label>
          <label htmlFor="nombre">
            Asunto
            <input type="text" className="input-signup" placeholder="Ponle un asunto a tu mensaje" />
          </label>
          <label htmlFor="comentario">
            Mensaje
            <textarea
              name="comentarios"
              id="comentarios"
              cols="30"
              rows="4"
              className="input-signup"
              placeholder="Estamos emocionados por leer tus comentarios"
            ></textarea>
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>


      <Footer/>
    </div>
  );
};
