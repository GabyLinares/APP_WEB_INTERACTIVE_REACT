import React, { useState } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import { SignupForm } from "../../componentes/FormSignup";
import "bootstrap/dist/css/bootstrap.css";

export const SignUpPH = () => {

  return (
    <div className="loginpage">
      <ReactTitle title="Registro" />
      <Navbar />
      <Header />
      <Barra titulo="Registro" />
      <SignupForm />

      <Footer />
    </div>
  );
};
