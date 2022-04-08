import React from "react";
import imgGallery1 from "../../../../assets/img/Gallery/1.jpg"
import imgGallery2 from "../../../../assets/img/Gallery/2.jpg"
import imgGallery3 from "../../../../assets/img/Gallery/3.jpg"
import imgGallery4 from "../../../../assets/img/Gallery/4.jpg"
import imgGallery5 from "../../../../assets/img/Gallery/5.jpg"
import imgGallery6 from "../../../../assets/img/Gallery/6.jpg"
import "../Gallery/Gallery.scss"


import Carusel from "../../../Slider/Slider";



const Gallery  = () => {
    return (
        <div className="main__gallery">
            <div className="Gallery__title">
                <h2><span>Gallery</span></h2>

            </div>

            <div className="Gallery_Block">
                <Carusel>
                    <img alt="img" src={imgGallery1}></img>
                    <img alt="img" src={imgGallery2}></img>
                    <img alt="img" src={imgGallery3}></img>
                    <img alt="img" src={imgGallery4}></img>
                    <img alt="img" src={imgGallery5}></img>
                    <img alt="img" src={imgGallery6}></img>

                </Carusel>

                
                <div className="Gallery__Block__title">
                    <h3>Gallery title</h3>

                    <p>His story barbershop is a customized service for our clients. We wanted to get the best and most professional service anyone in Malta can offer today. The inspiration came from the middle east where visiting a barbershop is not just a visit, it’s a fun.</p>

                </div>

                <div className="Gallery__Block__img">
                    <img alt="img" src={imgGallery1}></img>
                    <img alt="img" src={imgGallery2}></img>
                    <img alt="img" src={imgGallery3}></img>
                    <img alt="img" src={imgGallery4}></img>
                    <img alt="img" src={imgGallery5}></img>
                    <img alt="img" src={imgGallery6}></img>




                </div>

            </div>

        </div>
       


    )



}

export default Gallery