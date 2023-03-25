import React from "react"
import '../styles/header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export const CartWidget = () => {
    return (
        <div className="cartStyle">
            <ShoppingCartIcon />
            <p>3</p>
        </div>
    )
}