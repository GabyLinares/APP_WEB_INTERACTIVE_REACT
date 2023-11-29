import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Element } from "../views/Inventory/element";

import data from "../assets/data.json";

import edit from "../assets/images/fichaedit.svg";
import borrar from "../assets/images/fichadelete.svg";

export const Producto = ({id, titulo, imgURL, action}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, []);

    const deleteItem = ({id}) => {
        data.splice(data.findIndex((item) => item.id === 2), 1);
    };
    const handleDelete = ({id}) =>{
        alert(`${id}`);
    }
    function Buttons({display, id}){
        if(display){
            return(
                <div class="product-buttons">
                    <a class="product-btn" href={`/catalogo/${id}/edition`}><img src={edit} alt=""></img></a>
                    <button class="product-btn" onClick={() => deleteItem({id})}><img src={borrar} alt=""></img></button>
                </div>
            );
        }
    }
    const [product] = useState();
    return(
        <div class="product-card">
            <div class="product-title">
                <h1>{titulo}</h1>
            </div>
            <div class="product-image">
                <a href={`/catalogo/${id}`}><img src={imgURL}/></a> 
            </div>
            <Buttons display={action} id={id}/>
        </div>

    );
};