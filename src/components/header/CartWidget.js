import React, { useContext } from "react"
import '../styles/header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { CartProductContext } from "../../context/CartProductContext"



export const CartWidget = () => {
    const { cart } = useContext(CartProductContext)
    return (
        <div className="cartStyle">
            <ShoppingCartIcon />
            <p>{cart.length}</p>
        </div>
    )
}