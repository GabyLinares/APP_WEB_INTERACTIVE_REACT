import React, { useState, useEffect } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import "bootstrap/dist/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';
import { LocationList } from "../../componentes/LocationList";
library.add(faTrash, faPlus);


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

  const [LocationName, setLocationName] = useState("");

  useEffect(() => {
    const savedLocationData = localStorage.getItem("locationData");

    if (savedLocationData) {
      const locationDataObject = JSON.parse(savedLocationData);
      const { nombre } = locationDataObject;

      setLocationName(nombre);
    }
  }, []);
  // DATOS QUEMADOS
  const [locations, setLocations] = useState([
    {
        id: nanoid(),
        name: "Piscina de Pelotas",
        details: "Piscina de pelotas con tema de dinusaurio",
        provider: "",
    },
    {
        id: nanoid(),
        name: "Luces Interactivas",
        details: "Ubicado en el Eden",
        provider: "",
    }
]);

// MÉTODO DE AÑADIR ESPACIO
const addLocation = (id, name, details, provider) => {
    const newLocation = {
        id: nanoid(),
        name: name,
        details: details,
        provider: provider,
    };

    const newLocations = [...locations, newLocations];
    setLocations(newLocations);

};

// MÉTODO PARA BORRAR ESPACIO
  const deleteLocation = (id) => {
    const newLocations = locations.filter((location) => location.id !== id);
    setLocations(newLocations);
  };
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

        
        <LocationList
          locations={locations}
          handleAddLocation={addLocation}
          handleDeleteLocation={deleteLocation} />

      </div>
      <Footer />
    </div>
  );
};


