import React from "react";
import OurStoryImg from "../../../../assets/img/ourService.jpg" 
import haircut_item1 from "../../../../assets/img/haircut_item1.jpg"
import haircut_item2 from "../../../../assets/img/haircut_item2.jpg"
import haircut_item3 from "../../../../assets/img/haircut_item3.jpg"
import FacialPack1 from "../../../../assets/img/FacialPack1.jpg"
import FacialPack2 from "../../../../assets/img/FacialPack2.jpg"
import FacialPack3 from "../../../../assets/img/FacialPack3.jpg"
import BeardCut1 from "../../../../assets/img/BeardCut1.jpg"
import BeardCut2 from "../../../../assets/img/BeardCut2.jpg"
import BeardCut3 from "../../../../assets/img/BeardCut3.jpg"
import "../Service/Service.scss"



const Service = ({modalActive, setModalActive}) => {
   

    return (
        <div className="main__servise"> 
           <div className="Service__Block__title">
                <h2>Our <span>Services</span></h2>

            </div>

           <div className="Service__Block__Story">
                <div className="Service__Block__Story_img">
                    <img alt="img" src={OurStoryImg}></img>
                </div>
               
               
                <div className="Service__Block__Story__wrapper">
                    <h3>Our <span>Service</span></h3>
                    <div className="Service__Block__Story__line"></div>
                    <p>At His story barbershop we give a premium and exclusive wide range of services to you as customer. A one way stop shop! There is nothing we can’t offer you.</p>
                </div>

            </div>

            <div className="Service__Line"></div>

            <div className="Services__wrapper">
                <h3>Hair</h3>

                <div className="Services__hair__items">
                    
                    <div className="Services__item">
                        <img alt="img" src={haircut_item1}></img>

                        <div className="Services__item__title">
                            <h4>Hair Cut</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>

                    </div>

                    <div className="Services__item">
                        <img alt="img" src={haircut_item2}></img>

                        <div className="Services__item__title">
                            <h4>Hair Highlights</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>
                        
                    </div>

                    <div className="Services__item">
                        <img alt="img" src={haircut_item3}></img>

                        <div className="Services__item__title">
                            <h4>Clipper Cut</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>
                        
                    </div>
                </div>
            
            </div>

            <div className="Services__wrapper">
                <h3>Beard</h3>

                <div className="Services__hair__items">
                    
                    <div className="Services__item">
                        <img alt="img" src={BeardCut1}></img>

                        <div className="Services__item__title">
                            <h4>Beard Grooming</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>

                    </div>

                    <div className="Services__item">
                        <img alt="img" src={BeardCut2}></img>

                        <div className="Services__item__title">
                            <h4>Beard Shave</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>
                        
                    </div>

                    <div className="Services__item">
                        <img alt="img" src={BeardCut3}></img>

                        <div className="Services__item__title">
                            <h4>Beard Highlights</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>
                        
                    </div>
                </div>

            </div>

            <div className="Services__wrapper">
                <h3>Facial</h3>

                <div className="Services__hair__items">
                    
                    <div className="Services__item">
                        <img alt="img" src={FacialPack1}></img>

                        <div className="Services__item__title">
                            <h4>Brow Threading / Shaping</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>

                    </div>

                    <div className="Services__item">
                        <img alt="img" src={FacialPack2}></img>

                        <div className="Services__item__title">
                            <h4>Hot Towel Shave</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>
                        
                    </div>

                    <div className="Services__item">
                        <img alt="img" src={FacialPack3}></img>

                        <div className="Services__item__title">
                            <h4>Shampoo & Haircut</h4>

                            <button onClick={() => setModalActive({...modalActive, modal1: true})}>BOOK NOW</button>
                        </div>
                        
                    </div>

                </div>

            </div>

           
        </div>

    )



}

export default Service