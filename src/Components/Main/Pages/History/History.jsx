import React from "react";
import StoryImg from "../../../../assets/img/HistoryStory.jpg"
import StoryImg2 from "../../../../assets/img/HistoryStory2.jpeg"
import "../History/History.scss"



const History = () => {
    return (
        <div className="main__history"> 
           <div className="History__Block__title">
                <h2>Our <span>History</span></h2>

            </div>

           <div className="History__Block__Story">
                <div className="History__Block__Story__wrapper">
                    <h3>Our <span>Story</span></h3>
                    <div className="History__Block__Story__line"></div>
                    <p>His story barbershop is a customized service for our clients. We wanted to get the best and most professional service anyone in Malta can offer today. The inspiration came from the middle east where visiting a barbershop is not just a visit, it’s a fun, exciting place to be! With a team of over 5-10 years of experience we know how to take care of your face and hair. Both socializing as well as feeling fresh and great is our mission here at His story barbershop.</p>
                </div>

                <div className="History__Block__Story_img">
                    <img alt="img" src={StoryImg}></img>
                </div>

            </div>

            <div className="History__Line"></div>

           <div className="History__Block__ChooseUs">
                <div className="History__Block__ChooseUs__wrapper">
                    <h3><span>Why</span> choose us</h3>
                    <div className="History__Block__ChooseUs__line"></div>
                    <p>Our barbershop is the territory created purely for males who appreciate premium quality, time and flawless look. At our place, you have a chance to have a really good time.</p>
                </div>

                <div className="History__Block__ChooseUs_img">
                    <img alt="img" src={StoryImg2}></img>
                </div>

           </div>

            

            

        </div>

    )



}

export default History