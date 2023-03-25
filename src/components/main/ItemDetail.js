import React from "react";
import "../styles/itemDetailContainer.css"
import { Link } from "react-router-dom";

export const ItemDetali = ({ product }) => {
return (
    <div key={product.id} className="datailProducts">
    <img
        className="detailProducts-img"
        src={`${process.env.PUBLIC_URL}/imagenes/${product.img}`} alt={product.nombre}
    />
    <div className="detailProducts-text">
        <h2 className="detailProducts-title">{product.nombre}</h2>
        <p className="detailProducts-description">{product.descripcion}</p>
        <p className="detailProducts-price">${product.precio}</p>
        <Link to={"/"}>
        <button className="cardProducts-buttom">Volver a la tienda</button>
        </Link>
    </div>
    </div>
);
};