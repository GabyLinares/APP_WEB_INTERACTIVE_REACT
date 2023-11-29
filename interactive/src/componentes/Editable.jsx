import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Element } from "../views/Inventory/element";

import Atracciones from "../assets/data.json";

import edit from "../assets/images/fichaedit.svg";
import borrar from "../assets/images/fichadelete.svg";

export const Editable = ({id, titulo, imgURL, text}) => {
    return(
        <div class="product-detail-card">
            <div class="product-title-edition">
                <div class="product-edit-label">
                    <label for="text">Nombre del elemento</label>
                </div>
                <div class="product-edit-field">
                    <textarea type="text" rows="1" columns="60">{titulo}</textarea>
                </div>
            </div>
            <div class="product-data">
                <div class="product-detail-image">
                    <img src={imgURL}/>
                </div>
                <div class="product-description-edition">
                    <div class="product-edit-label">

                        <label for="text">Descripción del elemento</label>
                    </div>
                    <div class="product-edit-field">
                        <textarea type="text" rows="8" cols="50">{text}</textarea>
                        <a href={`/catalogo/${id}`}><img src={edit}></img></a>
                    </div>
                </div>
                
            </div>
        </div>

    );
};