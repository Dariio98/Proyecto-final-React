import React from "react";
import '../styles/header.css'
import logo from '../../assets/logo.png'    
import { CartWidget } from "./CartWidget";
import NavbarCategories from "./NavbarCategories";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="navbarBranch">
                    <Link to={'/'}>
                    <img src={logo} alt="logo" />
                    </Link>
                <h1>Hogareño</h1>
                </div>
                <NavbarCategories />
                <Link to={'/Cart'}>
                <CartWidget />
                </Link>
            </nav>
        </>
    )
    }

export default Header