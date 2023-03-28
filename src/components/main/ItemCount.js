import React, {useState}from "react";


export const ItemCount = ({ addProductCart ,stock = 10}) => {
    const [count, setNumber] = useState(1)

    const handlerCountAdd = (e) => {
        if (count < stock ) {
            setNumber(count + 1);
            };
        
    }
    const handlerCountDelet = (e) => {
        if (count > 1 ) {
        setNumber(count - 1);
        };
    }

    return (
        <div className="itemCount">
            <button onClick={() => handlerCountDelet()}>-</button>
            <h3>{count}</h3>
            <button onClick={() => handlerCountAdd()}>+</button>
            <button onClick={()=> addProductCart(count)}>Agregar al carrito</button>
        </div>
    )
}