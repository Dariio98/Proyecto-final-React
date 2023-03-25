import React from "react"
import '../styles/main.css'
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const greeting = "Equipa tu casa con nuestros mejores productos";
    
    return (
        <>
            <div className="greetingContainer">
                <section className="hero">
                    <div className="hero-container">
                        <h2>{greeting}</h2>
                        <p>Descubre nuestra amplia selección de productos para el hogar. Ofrecemos todo lo que necesitas para hacer que tu hogar sea cómodo, elegante y funcional. Desde muebles y accesorios hasta electrodomésticos y más, tenemos todo lo que necesitas para crear el hogar de tus sueños</p>
                    </div>
                </section>
                <div className="containProducts">
                    <ItemList />
                </div>
            </div>
        </>
        )
}

export default ItemListContainer