import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// handleDeleteUser
library.add(faTrash, faPlus);

export const LocationObj = ({ id, name, details, provider, handleDeleteLocation}) => {
    return (
        <div className="obj-wrapper">
            <div className="location-obj">
                <div className="info">
                    <span id="nombre">{name}</span>
                    <span id="detalles">{details}</span>
                    <span id="proveedor">{provider}</span>
                </div>
            </div>
            <div className="location-obj-footer">
                <button className="borrar" style={{ fontSize: '24px', color: 'red' }} onClick={() => handleDeleteLocation(id)}><FontAwesomeIcon icon={faTrash} /></button>
                {/* <a href={`/lugares-editar`}>
                    <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
                </a> */}
            </div>
        </div>
    )
}