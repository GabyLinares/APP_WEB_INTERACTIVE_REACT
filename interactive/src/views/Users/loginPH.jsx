import React, { useState } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import { LoginForm } from "../../componentes/FormLogin";
import homeimage from "../../assets/images/home-image.png";
import "bootstrap/dist/css/bootstrap.css";


export const LoginPH = () => {
  return (
    <div className="loginpage">
      <ReactTitle title="Login" />
      <Navbar />
      <Header />
      <Barra titulo="Inicio de sesión"/>
      <LoginForm/>


      <Footer/>
    </div>
  );
};
