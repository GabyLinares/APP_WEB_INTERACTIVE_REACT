import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import { Detalles } from "../../componentes/Detalles";
import { LoginForm } from "../../componentes/FormLogin";
import { Blank } from "../../componentes/Blank";
import "bootstrap/dist/css/bootstrap.css";

import Atracciones from "../../assets/data.json";



import addItem from "../../assets/images/boton-fichita.png";


export const NewElem = () => {

    return (
        <div className = "aditionPage">
            <ReactTitle title = "Catálogo de Atracciones"/>
            <Navbar/>
            <Header/>
            <Barra titulo="Detalles de atracción (Edición)"/>
            <div className="product-edit">
                <Blank id={0} titulo={"Nuevo elemento"} imgURL={addItem} text={"Nuevo elemento"}/>
            </div>
            <Footer/>
        </div>
    )
}