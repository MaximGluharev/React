import React from "react";
import "../Appoint/Appoint.scss"


const Appoint = ({data}) => {
    if (!data.Name) {
        return (
            <div><h3>No matches....</h3></div>
        )


    } else {
        return (
            <div className="appoint_page">
                <div>
                    <h3><span>{ data.Name ? data.Name : "Hello" }</span> you are registered for a<br/> "{data.Service ? data.Service : "Hello"}" on {data.Date ? data.Date : "Hello"} at {data.Time ? data.Time : "Hello"}.</h3>
    
                </div>
    
            </div>
    
        )


    }
  
   

        







   








}

export default Appoint