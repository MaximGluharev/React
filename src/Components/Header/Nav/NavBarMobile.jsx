import React from "react"
import styles from "../Nav/Nav.module.scss"
import NavLinks from "./NavLinks";
import {FiMenu} from 'react-icons/fi'
import {CgCloseO} from 'react-icons/cg'
import { useState } from "react";





const NavBarMobile = () => {
    const [open, setOpen] = useState(false);
    const BgMenu = <FiMenu className={styles.BgMenu_icon} 
        size='50px' color="#4c8ef0" 
        onClick={() => setOpen(!open)}
    />
    
    const BgMenuClose = <CgCloseO className={styles.BgMenu_icon} 
        size='50px' color="#4c8ef0" 
        onClick={() => setOpen(!open)}
    /> 

    const closeMobileMenu = () => setOpen(false)

    return (
        <nav className={styles.NavBarMobile}>
            {open ? BgMenuClose : BgMenu}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}

        
        </nav> 
        
    )

}   

export default NavBarMobile