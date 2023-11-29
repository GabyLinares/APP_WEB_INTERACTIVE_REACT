import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// handleDeleteUser
library.add(faTrash, faPlus);

export const UserObj = ({ id, name, role, phone, type, email, imgUrl, handleDeleteUser}) => {
    return (
        <div className="obj-wrapper">
            <div className="user-obj">
                <img src={imgUrl} alt="" />
                <div className="info">
                    <span id="nombre">{name}</span>
                    <span id="puesto">{type}</span>
                    <span id="cel">{phone}</span>
                    <span id="rol">{role}</span>
                    <span id="email">{email}</span>
                </div>
            </div>
            <div className="user-obj-footer">
                <button className="borrar" style={{ fontSize: '24px', color: 'red' }} onClick={() => handleDeleteUser(id)}><FontAwesomeIcon icon={faTrash} /></button>
                {/* <a href={`/usuarios-editar`}>
                    <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
                </a> */}
            </div>
        </div>
    )
}