import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartProductContext, } from "../../context/CartProductContext"



const Cart = () => {
const { cart } = useContext(CartProductContext)

    return (
            <>
            {!cart.length ? (
                <div>
                    <h1>
                        Su carrito está vacio!
                    </h1>
        
                    <Link to='/'>
                        <button>Volver a la tienda</button>
                    </Link>
        
                </div>
            ) : (
                <>
                {cart.map((product) => {
                    return (
                        <>
                            <h1>{product.nombre}</h1>
                            <h2>Cantidad</h2>
                            <h2>Precio {product.precio}</h2>
                        </>
                    )
                })}
                </>
            )}
        </>

    );
};

export default Cart