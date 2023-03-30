import React, { createContext, useState } from "react"   
export const CartProductContext = createContext();


export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([])



    const addProduct = (product, cant) => {
        console.log(product);
        if(isInCart(product.id)) {
        const updatedCart = cart.map(item => {
            if(item.id === product.id) {
                return {...item, cant: item.cant + cant}
            }
            return item;
        });
        setCart(updatedCart)
        
        } else {
            setCart([...cart, {...product,cant}])
        }
    }

    const removeProduct = (id) => {
        setCart(cart.filter((product) => product.id !== product.id))
    }
    
    const isInCart = (id) => {return cart.some((product) => product.id === id)}

    const clear = () => {
        setCart([]);
    }

    return (
        <CartProductContext.Provider value={{cart,addProduct,removeProduct,isInCart,clear}}>
            {children}
        </CartProductContext.Provider>
    )
}