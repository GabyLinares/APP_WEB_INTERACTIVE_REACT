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
import { UsersList } from "../../componentes/UsersList";
library.add(faTrash, faPlus);


export const UserMPH = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        const savedUserData = localStorage.getItem("userData");

        if (savedUserData) {
            const userDataObject = JSON.parse(savedUserData);
            const { nombre } = userDataObject;

            setUserName(nombre);
        }
    }, []);

    // DATOS QUEMADOS
    const [users, setUsers] = useState([
        {
            id: nanoid(),
            name: "Bustos, Sofía",
            role: "Community Manager",
            phone: "+57 3125378754",
            type: "empleada",
            email: "sofbus@gmail.com",
            imgUrl: "https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg"
        },
        {
            id: nanoid(),
            name: "Marín, Angela",
            role: "Community Manager",
            phone: "+57 31255346782",
            type: "empleada",
            email: "marian@gmail.com",
            imgUrl: "https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg"
        }
    ]);

    // MÉTODO DE AÑADIR USUARIO
    const addUser = (id, name, role, phone, type, email, imgUrl) => {
        const newUser = {
            id: nanoid(),
            name: name,
            role: role,
            phone: phone,
            type: type,
            email: email,
            imgUrl: imgUrl,
        };

        const newUsers = [...users, newUser];
        setUsers(newUsers);

    };

    // MÉTODO PARA BORRAR USUARIO
      const deleteUser = (id) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
      };

    return (
        <div className="loginpage">
            <ReactTitle title="Gestión de usuarios" />
            <Navbar />
            <Header />
            <Barra titulo={`Bienvenid@ ${userName || "admin"},`} />
            <div className="full-wrap">
                <div className="admin-wrapper">
                    <div className="button-section">
                        <div className="button-obj top">
                            <p>Gestión de usuarios</p>
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
                        <a href="/gestion-espacios">
                            <div className="button-obj">
                                <p>Gestión de espacios</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="button-obj">
                                <p>Ajustes</p>
                            </div>
                        </a>
                    </div>
                </div>
                <UsersList
                    users={users}
                    handleAddUser={addUser}
                    handleDeleteUser={deleteUser} />
            </div>
            <Footer />
        </div>
    );
};
