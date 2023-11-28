import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import { Detalles } from "../../componentes/Detalles";
import { LoginForm } from "../../componentes/FormLogin";
import "bootstrap/dist/css/bootstrap.css";

import Atracciones from "../../assets/data.json";

import tobogan from "../../assets/images/tobogan.jpg";
import arkadia from "../../assets/images/local-arkadia.png";
import pelotas from "../../assets/images/ballpool.png";

import edit from "../../assets/images/fichaedit.svg";
import addItem from "../../assets/images/boton-fichita.png";

const ptasIMG = [tobogan, arkadia, pelotas];

export const Element = () => {
    const {id} = useParams();
    return (
        <div className = "elementPage">
            <ReactTitle title = "Catálogo de Atracciones"/>
            <Navbar/>
            <Header/>
            <Barra titulo="Detalles de atracción"/>
            <div className="product-detail">
                <Detalles id={id} titulo={Atracciones[id].name} imgURL={ptasIMG[Atracciones[id].url]} text={Atracciones[id].description}/>
                
            </div>
            <Footer/>
        </div>
    )
}