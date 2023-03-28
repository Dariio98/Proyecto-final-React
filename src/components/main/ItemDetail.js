import React, { useContext } from "react";
import "../styles/itemDetailContainer.css"
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { CartProductContext } from "../../context/CartProductContext"

export const ItemDetali = ({ product }) => {
    const { addProduct } = useContext(CartProductContext)

    const addProductCart = (count) => {
        console.log(product, count);
        addProduct(product, count);
    }
return (
    <div key={product.id} className="datailProducts">
    <img
        className="detailProducts-img"
        src={`${process.env.PUBLIC_URL}/imagenes/${product.img}`} alt={product.nombre}
    />
    <div className="detailProducts-text">
        <h2 className="detailProducts-title">{product.nombre}</h2>
        <p className="detailProducts-description">{product.descripcion }</p>
        <p className="detailProducts-price">${product.precio}</p>
        <ItemCount addProductCart={addProductCart} />
        <div className="detailProducts-button">           
            <Link to={"/"}>
            <button className="cardProducts-buttom">Volver a la tienda</button>
            </Link>
        </div>
    </div>
    </div>
);
};