import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartProductContext, } from "../../context/CartProductContext"



const Cart = () => {
const { cart, removeProduct } = useContext(CartProductContext)


const handlerRemove = (product, event) => {
    console.log(event);
    removeProduct(product)
}
return (
    <>
    {!cart.length ? (
        <div>
        <h1>Su carrito está vacio!</h1>
        <Link to="/">
            <button>Volver a la tienda</button>
        </Link>
        </div>
    ) : (
        <>
        <div className="cart">
            {cart.map((product) => {
            return (
                <div className="productCart" key={product.id}>
                <h1>{product.nombre}</h1>
                <h2>Cantidad: {product.cant}</h2>
                <h2>Precio {product.precio}</h2>
                <button onClick={() => handlerRemove(product.id)}>
                    Eliminar producto
                </button>
                </div>
            );
            })}
        </div>
        <div className="deleteProductsCart">
            <button onClick={removeProduct}>Vaciar carrito</button>
        </div>
        </>
    )}
    </>
);
};

export default Cart