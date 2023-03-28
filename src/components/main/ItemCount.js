import React, {useState}from "react";


export const ItemCount = ({stock = 10}) => {
    const [number, setNumber] = useState(1)

    const handlerCountAdd = (e) => {
        if (number < stock ) {
            setNumber(number + 1);
            };
        
    }
    const handlerCountDelet = (e) => {
        if (number > 1 ) {
        setNumber(number - 1);
        };
    }

    return (
        <div className="itemCount">
            <button onClick={() => handlerCountDelet()}>-</button>
            <h3>{number}</h3>
            <button onClick={() => handlerCountAdd()}>+</button>
        </div>
    )
}