import React, { useState, useEffect } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import "bootstrap/dist/css/bootstrap.css";


export const EventRegistryPH = () => {

    const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
      const userDataObject = JSON.parse(savedUserData);
      const { nombre } = userDataObject;

      setUserName(nombre);
    }
  }, []);

  return (
    <div className="loginpage">
      <ReactTitle title="Registro de eventos" />
      <Navbar />
      <Header />
      <Barra titulo={`Bienvenid@ ${userName || "admin"},`}/>
      <div className="full-wrap">
      <div className="admin-wrapper">
      <div className="button-section">
        <div className="button-obj top">
          <p>Registro de eventos</p>
        </div>
        <a href="/dashboard">
          <div className="button-obj">
            <p>Dashboard</p>
          </div>
        </a>
        <a href="/gestion-espacios">
          <div className="button-obj">
            <p>Gestión de espacios</p>
          </div>
        </a>
        <a href="usuarios">
          <div className="button-obj">
            <p>Gestión de usuarios</p>
          </div>
        </a>
        <a href="#">
          <div className="button-obj">
            <p>Ajustes</p>
          </div>
        </a>
      </div>
    </div>

    {/* AQUI */}
      </div>


      <Footer/>
    </div>
  );
};


