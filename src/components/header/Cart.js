import React from "react"
import { Link } from "react-router-dom"



const Cart = () => {

    return (
        <div>
            <h1>
                Su carrito está vacio!
            </h1>

            <Link to='/'>
                <button>Volver a la tienda</button>
            </Link>

        </div>
    )
}

export default Cart