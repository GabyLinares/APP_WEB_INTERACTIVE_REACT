import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// handleDeleteUser
library.add(faTrash, faPlus);

export const EventObj = ({ id, namedate, organizerphone, organizeremail, details, handleDeleteEvent}) => {
    return (
        <div className="obj-wrapper">
            <div className="event-obj">
                <div className="info">
                    <span id="nombre/fecha">{namedate}</span>
                    <span id="telefonoorganizador">{organizerphone}</span>
                    <span id="correoorganizador">{organizeremail}</span>
                    <span id="detalles">{details}</span>
                </div>
            </div>
            <div className="location-obj-footer">
                <button className="borrar" style={{ fontSize: '24px', color: 'red' }} onClick={() => handleDeleteEvent(id)}><FontAwesomeIcon icon={faTrash} /></button>
                {/* <a href={`/lugares-editar`}>
                    <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
                </a> */}
            </div>
        </div>
    )
}