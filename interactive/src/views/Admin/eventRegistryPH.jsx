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
import { EventList } from "../../componentes/EventList";
library.add(faTrash, faPlus);

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

  const [EventRegistryPH, setEventNamedate] = useState("");

  useEffect(() => {
    const savedEventData = localStorage.getItem("eventData");

    if (savedEventData) {
      const eventDataObject = JSON.parse(savedEventData);
      const { nombrefecha } = eventDataObject;

      setEventNamedate(nombrefecha);
    }
  }, []);

  // DATOS QUEMADOS
  const [events, setEvents] = useState([
    {
      id: nanoid(),
      namedate: "Evento (02.02.2024/2.00pm)",
      organizerphone: "+57 3125378654",
      organizeremail: "sofbus@gmail.com",
      details: "Evento cumpleaños, favor tener el espacio listo media hora antes.",
    },
    {
      id: nanoid(),
      namedate: "Reserva piscina (20.03.2024/5.pm-9.00pm)",
      organizerphone: "+57 3218477068",
      organizeremail: "arbostel@gmail.com",
      details: "Piscina de pelotas con tema de dinosaurio.",
    }
]);

// MÉTODO DE AÑADIR ESPACIO
const addEvent = (id, name, details, provider) => {
    const newLocation = {
        id: nanoid(),
        name: name,
        details: details,
        provider: provider,
    };

    const newEvents = [...events, newEvents];
    setEvents(newEvents);

};

// MÉTODO PARA BORRAR ESPACIO
  const deleteEvent = (id) => {
    const newEvents = events.filter((event) => event.id !== id);
    setEvents(newEvents);
  };

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

    <EventList
      events={events}
      handleAddEvent={addEvent}
      handleDeleteEvent={deleteEvent} />

      </div>
      <Footer/>
    </div>
  );
};


