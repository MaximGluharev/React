import React from "react"
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import styles from "../Nav/Nav.module.scss"



const Nav = () => {
    return (
        <div className={styles.Nav}>
            <NavBar/>
            <NavBarMobile/>
            
        </div>

    )

}   

export default Nav