import React, { useState, useEffect } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import "bootstrap/dist/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash, faEdit);


export const LocationMPH = () => {

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
      <ReactTitle title="Gestión de espacios" />
      <Navbar />
      <Header />
      <Barra titulo={`Bienvenid@ ${userName || "admin"},`} />
      <div className="full-wrap">
        <div className="admin-wrapper">
          <div className="button-section">
            <div className="button-obj top">
              <p>Gestión de espacios</p>
            </div>
            <a href="/dashboard">
              <div className="button-obj">
                <p>Dashboard</p>
              </div>
            </a>
            <a href="/registro-eventos">
              <div className="button-obj">
                <p>Registro de eventos</p>
              </div>
            </a>
            <a href="/usuarios">
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

        <div className="section-wrapper">
          <div className="obj-wrapper">
            <div className="user-obj">
              <div className="info">
                <div className="title-wrapper">
                  <p id="titulo_info_espacios">Piscina de Pelotas</p>
                </div>
                <span id="titulo_info_espacios">Detalles</span>
                <span id="detalles_content">Piscina de pelotas, tema de dinosaurio</span>
                <span id="titulo_info_espacios">Proveedor</span>
                <span id="proveedor_content"> </span>
              </div>
            </div>
            <div className="user-obj-footer">
              <button className="borrar" style={{ fontSize: '24px', color: 'red' }}><FontAwesomeIcon icon={faTrash} /></button>
              <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
            </div>
          </div>

          <div className="obj-wrapper">
            <div className="user-obj">
              <div className="info">
                <div className="title-wrapper">
                  <p id="titulo_info_espacios">Luces Interactivas</p>
                </div>
                <span id="titulo_info_espacios">Detalles</span>
                <span id="detalles_content">Ubicado en el Eden</span>
                <span id="titulo_info_espacios">Proveedor</span>
                <span id="proveedor_content"> </span>
              </div>
            </div>
            <div className="user-obj-footer">
              <button className="borrar" style={{ fontSize: '24px', color: 'red' }}><FontAwesomeIcon icon={faTrash} /></button>
              <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
            </div>
          </div>

          <div className="obj-wrapper">
            <div className="user-obj">
              <div className="info">
                <div className="title-wrapper">
                  <p id="titulo_info_espacios">Laberinto</p>
                </div>
                <span id="titulo_info_espacios">Detalles</span>
                <span id="detalles_content">En mantenimiento</span>
                <span id="titulo_info_espacios">Proveedor</span>
                <span id="proveedor_content"> </span>
              </div>
            </div>
            <div className="user-obj-footer">
              <button className="borrar" style={{ fontSize: '24px', color: 'red' }}><FontAwesomeIcon icon={faTrash} /></button>
              <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};


