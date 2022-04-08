import React from "react"
import styles from "../Nav/Nav.module.scss"
import NavLinks from "./NavLinks";



const NavBar = () => {
    return ( 
        <nav className={styles.NavBar}>  
            <NavLinks/>
        </nav> 

    )

}   

export default NavBar