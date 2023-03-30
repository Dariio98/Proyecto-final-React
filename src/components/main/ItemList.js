import React, { useEffect, useState, useContext} from 'react'
import '../styles/main.css'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { CartProductContext } from "../../context/CartProductContext"


const ItemList = () => {
    const [products, setProducts] = useState([]);
    const { name } = useParams();
    const URL = './stock.json';
    const filterProducts = products.filter(product => product.categoria === name);
    const { addProduct } = useContext(CartProductContext)


    const handlerAddCart = (event, product, cant) => {
        console.log(event.target)
        addProduct(product, cant);
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
        //Verificacion de categoria} 
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
                <button onClick={(event) => handlerAddCart(event, product, 1)}>Agregar al carrito</button>
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
                    <button onClick={(event) => handlerAddCart(event, product, 1)}>Agregar al carrito</button>
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

