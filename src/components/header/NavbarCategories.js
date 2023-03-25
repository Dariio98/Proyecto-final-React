import React from "react"
import '../styles/header.css'
import { NavLink } from "react-router-dom"

const NavbarCategories = () => {
    const categories = [
        {id:1, nombre:"Inicio", route: '/'},
        {id:2, nombre:"Cocina", route: '/categoria/cocina'},
        {id:3, nombre:"Dormitorio", route: '/categoria/dormitorio'},
        {id:4, nombre:"Living", route: '/categoria/living'},
        {id:5, nombre:"Baño", route: '/categoria/baño'}
    ];

    return (
        <>
            { categories.map((category) => {
                return (
                    <div className="navCategory" key={category.id}>
                        <li className="navCategory-list">
                            <NavLink className="navCategory-link" to={category.route}>{category.nombre}</NavLink>
                            </li>
                    </div>
                    )
            })}
        </>
    )
}

export default NavbarCategories;