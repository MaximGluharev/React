import React from "react"
import { NavLink } from "react-router-dom";
import styles from "../Nav/Nav.module.scss"
import { motion } from "framer-motion";



const NavLinks = (props) => {
    const animateFrom = { opasity: 0, y: -40 }
    const animateTo = { opasity: 1, y: 0 }

    return (
        <div className={styles.NavLink}>
            <NavLink to='/home'>
                <motion.p
                    initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>Home
                </motion.p>
            </NavLink>

            <NavLink to='/history'>
                <motion.p 
                    initial={animateFrom} animate={animateTo} transition={{delay: 0.10}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>History
                </motion.p>
            </NavLink>

            <NavLink  to='/service'>
                <motion.p 
                    initial={animateFrom} animate={animateTo} transition={{delay: 0.20}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>Service
                </motion.p>
            </NavLink>

            <NavLink to='/gallery'>
                <motion.p 
                    initial={animateFrom} animate={animateTo} transition={{delay: 0.30}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>Gallery
                </motion.p>
            </NavLink>


            


          
        </div>

    )

}   

export default NavLinks