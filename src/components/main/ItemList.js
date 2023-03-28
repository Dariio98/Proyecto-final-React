import React, { useEffect, useState} from 'react'
import '../styles/main.css'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const ItemList = () => {
    const [products, setProducts] = useState([]);
    const { name } = useParams();
    const URL = './stock.json';
    const filterProducts = products.filter(product => product.categoria === name);

    const handlerAddCart = (event) => {
        console.log(event.target)
    }


    useEffect(() => {
    const getProducts = async () => {
        try {
        const res = await fetch(URL)
        const data = await res.json()
        setProducts(data)
        } catch(error) {
        console.log("error",error );
        
        }
    };
    getProducts();   
    }, []);

    return (
    <>
        {products.length ? (
        name ? (
            filterProducts.map((product) =>
            <div key={product.id} className="cardProducts">
                <img className="cardProducts-img" src={`${process.env.PUBLIC_URL}/imagenes/${product.img}`} alt={product.nombre}/>
                <div className="cardProducts-text">
                <h2 className="cardProducts-title">{product.nombre}</h2>
                <p className="cardProducts-price">{product.precio}</p>
                <div className='cardProducts-button'>
                    <button onClick={handlerAddCart}>Agregar al carrito</button>
                <Link to={`/product/${product.id}`}>
                    <button>Detalles</button>
                </Link>
                </div>
                </div>
            </div>
            )
        ) : (
            products.map((product) =>
            <div key={product.id} className="cardProducts">
                <img className="cardProducts-img" src={`${process.env.PUBLIC_URL}/imagenes/${product.img}`} alt={product.nombre}/>
                <div className="cardProducts-text">
                <h2 className="cardProducts-title">{product.nombre}</h2>
                <p className="cardProducts-price">${product.precio}</p>
                    <div className="cardProducts-button">
                        <button onClick={handlerAddCart}>Agregar al carrito</button>
                                        <Link to={`/product/${product.id}`}>
                        <button>Detalles</button>
                                        </Link>
                    </div>
                </div>
            </div>
            )
        )
        ) : (
        <p>Cargando productos...</p>
        )}
    </>
    )
};

export default ItemList

