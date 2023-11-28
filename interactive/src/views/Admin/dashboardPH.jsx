import React, { useState, useEffect } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import "bootstrap/dist/css/bootstrap.css";


export const DashboardPH = () => {

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
      <ReactTitle title="Dashboard" />
      <Navbar />
      <Header />
      <Barra titulo={`Bienvenid@ ${userName || "admin"},`}/>
      <div className="full-wrap">
      <div className="admin-wrapper">
        <div className="button-section">
          <div className="button-obj top">
            <p>Dashboard</p>
          </div>
          <a href="/gestion-espacios">
            <div className="button-obj">
              <p>Gestión de espacios</p>
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
      <div className="obj-wrapper-dashboard-1">
        <div className="user-obj">
          <img
            src="https://www.mundopsicologos.com/site/article/60606/50895/las-10-cualidades-de-una-persona-mas-valoradas-0_ai1.jpg"
            alt=""
          />
          <div className="info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere exercitationem nam odit assumenda, doloribus sapiente dolorem quo, necessitatibus itaque quia, tempore accusamus ratione aspernatur modi ad eligendi nihil cumque totam.
          </div>
        </div>
      </div>

      <div className="obj-wrapper">
        <div className="user-obj">
          <div className="info"></div>
        </div>
      </div>

      <div className="obj-wrapper">
        <div className="user-obj">
          <div className="info"></div>
        </div>
      </div>

      <div className="obj-wrapper">
        <div className="user-obj">
          <div className="info"></div>
        </div>
      </div>

      <div className="obj-wrapper">
        <div className="user-obj">
          <div className="info"></div>
        </div>
      </div>
    </div>
      </div>


      <Footer/>
    </div>
  );
};


