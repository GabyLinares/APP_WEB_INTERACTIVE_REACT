import React, { useState } from "react";
import { ReactTitle } from "react-meta-tags";
import { Navbar } from "../../componentes/Navbar";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Barra } from "../../componentes/BarraMitad";
import { Producto } from "../../componentes/Producto";
import { NewItem } from "../../componentes/NewItem";
import { LoginForm } from "../../componentes/FormLogin";
import Atracciones from "../../assets/data.json";

import "bootstrap/dist/css/bootstrap.css";

import tobogan from "../../assets/images/tobogan.jpg";
import arkadia from "../../assets/images/local-arkadia.png";
import pelotas from "../../assets/images/ballpool.png";

import addItem from "../../assets/images/boton-fichita.png";

const ptasIMG = [tobogan, arkadia, pelotas]
export const Catalogo = () => {
    return (
        <div className = "catalogPage">
            <ReactTitle title = "Catálogo de Atracciones"/>
            <Navbar/>
            <Header/>
            <Barra titulo="Atracciones"/>
            <div className = "catalog">
                {Atracciones.map((data, key) => {
                    return(
                        <div key={key}>
                            <Producto id={data.id} titulo={data.name} imgURL={ptasIMG[data.url]} action={true}/>
                        </div>
                    )
                
                
                })};
                <NewItem titulo="Añadir elemento" imgURL={addItem} action={false}/>
            </div> 
            <Footer/>
        </div>
    )
}