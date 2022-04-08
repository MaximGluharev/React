import React, { useEffect, useState } from "react";
import Profile from "../../assets/img/Notification 1.svg"
import Nav from "./Nav/Nav";
import "../Header/Header.scss"
import {FcCalendar} from 'react-icons/fc'




const Header = ({data, modalActive ,setModalActive}) => {
    const [count, setCount] = useState("0");

    useEffect(() => {
        if (data.Name) {
            setCount ("1")
        }
        
    }, [data]) 
   

    return (
        <header className="header">
            <Nav/>
            <div className="buttonBlock">
                <div onClick={() => setModalActive({...modalActive, modal2: true})} className="Profile_Block">
                    <img alt="img" src={Profile}/>
                    <span>{ count }</span>
                </div>
                
                <button className="Button" onClick={() => setModalActive({...modalActive, modal1: true})}>Appointment</button>

               
            </div>

            <div className="button_wrapper">
                <div onClick={() => setModalActive({...modalActive, modal2: true})} className="Notification">
                    <img alt="img" src={Profile}/>
                    <span>{count}</span>
                </div>

                <div className="dws" onClick={() => setModalActive({...modalActive, modal1: true})}>
                    <div className="pulse">
                    <div className="bloc"></div>
                    <div className="phone"><i><FcCalendar/></i></div>
                    <div className="text">Appoint</div>
                </div>
            </div>

        </div>
        </header>
    
    
    )

}


export default Header