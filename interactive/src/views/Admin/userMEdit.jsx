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

export const UserMPHedit = () => {
    const [userData, setUserData] = useState({
        id: 1, // Use the user's ID to identify and update the correct user
        name: "",
        phone: "",
        email: "",
        role: "",
        type: "cliente", // Default to "Cliente" if not specified
    });

    useEffect(() => {
        const savedUserData = localStorage.getItem("userData");

        if (savedUserData) {
            const userDataObject = JSON.parse(savedUserData);
            setUserData(userDataObject);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRadioChange = (e) => {
        setUserData((prevData) => ({ ...prevData, type: e.target.value }));
    };

    const handleSave = () => {
        // Update the user data in the list or send it to the server
        // You may want to implement the logic for updating the user data
        console.log("Updated User Data:", userData);
    };

    return (
        <div className="loginpage">
            <ReactTitle title="Gestión de usuarios" />
            <Navbar />
            <Header />
            <Barra titulo={`Bienvenid@ ${userData.name || "admin"},`} />

            <div className="admin-wrapper">
                <div className="section-wrapper">
                    <div className="obj-wrapper">
                        <div className="user-obj">
                            <img src={userData.imageUrl} alt="" />
                            <div className="info">
                                <input
                                    type="text"
                                    className="input-user-edit"
                                    placeholder="Nombre"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="number"
                                    className="input-user-edit"
                                    placeholder="Celular"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="email"
                                    className="input-user-edit"
                                    placeholder="Correo"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    className="input-user-edit"
                                    placeholder="Cargo"
                                    name="role"
                                    value={userData.role}
                                    onChange={handleInputChange}
                                />
                                <span id="titulo_info_espacios">Rol:</span>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="type"
                                        id="adminRadio"
                                        value="administrador"
                                        checked={userData.type === "administrador"}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label" htmlFor="adminRadio">
                                        Administrador
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="type"
                                        id="employeeRadio"
                                        value="empleado"
                                        checked={userData.type === "empleado"}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label" htmlFor="employeeRadio">
                                        Empleado
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="type"
                                        id="clientRadio"
                                        value="cliente"
                                        checked={userData.type === "cliente"}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label" htmlFor="clientRadio">
                                        Cliente
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="user-obj-footer">
                            <button className="borrar" style={{ fontSize: '24px', color: 'red' }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <a href="userManagementPH.html">
                                <button
                                    className="editar"
                                    style={{ fontSize: '24px', color: 'green' }}
                                    onClick={handleSave}
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
