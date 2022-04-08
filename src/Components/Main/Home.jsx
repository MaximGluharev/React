import React from "react";
import historyImg from "../../assets/img/history.png"
import "../Main/Home.scss"
import galleryImg1 from "../../assets/img/Mask Group.png"
import galleryImg2 from "../../assets/img/Mask Group2.png"
import galleryImg3 from "../../assets/img/Mask Group3.png"
import galleryImg4 from "../../assets/img/Mask Group4.png"
import galleryImg5 from "../../assets/img/Mask Group5.png"
import galleryImg6 from "../../assets/img/Mask Group6.png"
import vector3 from "../../assets/img/Vector 3.svg"
import vector4 from "../../assets/img/Vector 4.svg"
import vector1 from "../../assets/img/Vector 1.svg"
import vector2 from "../../assets/img/Vector 2.svg"
import { useNavigate, Link } from "react-router-dom";



const Home = ({modalActive, setModalActive}) => {
    
    const Navigate = useNavigate();
        
    return (
        <div className="main"> 
            <div className="section1">
               <div className="title"> 
                    <h2><span>Hairstyle</span> Reflects<br/>The Personality<br/>Inside You</h2>

                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at.</p>

                    <button onClick={() => setModalActive({...modalActive, modal1: true})}>Get Started</button>

                </div>

               
            </div>

            <div className="section2">
                <div className="vector"> 
                    <img alt="img" src={vector3}></img>
                    <img alt="img" src={vector4}></img>
                </div>

                <div className="historyBlock">
                     
                    <img alt="img" className="historyBlockImage" src={historyImg}/>
       
                    <div className="historyBlockTitle">
                            
                        <div className="BlockTitle">
                            <h2>Our <span>History</span></h2>

                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at.</p>

                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at.</p>

                            

                        </div>
                    </div>
                </div>

                
            </div>

            <div className="section3">
                <div className="ServicesTitle">
                    <h2>Services We<br/><span>Provide</span></h2>

                

                </div>

                <div className="servicesWrapper">
                    
                    
                    <div onClick={() => {Navigate("/service")}} className="serviceBlock">
                        <div className="serviceBlockImg1"></div>
                        
                        <h3>Hair Cut</h3>
                        
                        <p>long established fact that a reacted by the readable content of
                        hen looking at.</p>
                                            

                    </div>

                    
                    <div onClick={() => {Navigate("/service")}} className="serviceBlock">
                        <div className="serviceBlockImg2"></div>
                        
                        <h3>Beard Cut</h3>
                        
                        <p>long established fact that a reacted by the readable content of
                        hen looking at.</p>  
                        
                    </div>
                    
                    <div onClick={() => {Navigate("/service")}} className="serviceBlock">
                        <div className="serviceBlockImg3"></div>
                        
                        <h3>Facial Pack</h3>
                        
                        <p>long established fact that a reacted by the readable content of
                        hen looking at. </p>  
                        

                    </div>



                </div>

                <div className="vector"> 
                    <img alt="img" src={vector1}></img>
                    <img alt="img" src={vector2}></img>
                </div>
            </div>

            <div className="section4">
                
                <div className="Gallery__title">
                    <h2>Our <span>Gallery</span></h2>
                </div>

                <div>
                    <ul>
                        <li><img alt="img" src={galleryImg1}/></li>
                        <li><img alt="img" src={galleryImg2}/></li>
                        <li><img alt="img" src={galleryImg3}/></li>
                        <li><img alt="img" src={galleryImg4}/></li>
                        <li><img alt="img" src={galleryImg5}/></li>
                        <li><img alt="img" src={galleryImg6}/></li>
                    </ul>

                </div>

                <Link to="/gallery">Viem all</Link>

            </div>

            

        </div>

    )



}

export default Home