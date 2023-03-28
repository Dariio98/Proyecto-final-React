import React, { createContext, useState } from "react"   

export const CartProductContext = createContext();


export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([])



    const addProduct = (product, cant) => {
        console.log("Esta función agrega productos al carrito");
    }

    const removeProduct = (id) => {
        console.log("Esta función elimina productos del carrito");
    }
    const isInCart = (id) => {

        console.log("Esta función verifica si un producto ya se encuentra en carrito");
    }

    const clear = () => {
        setCart([]);
    }

    return (
        <CartProductContext.Provider value={{cart,addProduct,removeProduct,isInCart,clear}}>
            {children}
        </CartProductContext.Provider>
    )
}