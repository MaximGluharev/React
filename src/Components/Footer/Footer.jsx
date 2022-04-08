import React from "react";
import styles from "../Footer/Footer.module.scss"
import vector5 from "../../assets/img/Vector 5.svg"
import vector6 from "../../assets/img/Vector 6.svg"

const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.logo}></div>

                <p>It is a long established fact that a reader will be distracted by the readable </p>

                <div className={styles.social}>
                    <a href="#" className={styles.facebook}></a>

                    <a href="#" className={styles.twitter}></a>

                    <a href="#" className={styles.google}></a>

                </div>

                <div className={styles.line}></div>

                


            </div>

            <div className={styles.vector}> 
                <img alt="img" src={vector5}></img>
                <img alt="img" src={vector6}></img>
            </div>

        </footer>
            
    
    )

}


export default Footer