import React from "react"
import '../styles/main.css'
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const greeting = "Equipa tu casa con nuestros mejores productos";
    
    return (
        <>
            <div className="greetingContainer">
                <h2>{greeting}</h2>

                <div className="containProducts">
                    <ItemList />
                </div>
            </div>
        </>
        )
}

export default ItemListContainer