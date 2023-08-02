import React from "react";
import './overlay.scss'
function Overlay(props){
    console.log("overlay called")
    function handlerClose(){
          props.ol(false)
    }
    return(
        <div className="parent-box-overlay">
            {/* <h2>Overlay</h2> */}
            <div className="content-box-overlay">
                    <h2>Terms & Condition</h2>
                    
                    <p>Meta builds technologies and services that enable people to connect with each other, build communities and grow businesses. These Terms govern your use of Facebook, Messenger and the other products, features, apps, services, technologies and software that we offer (the Meta Products or Products), except where we expressly state that separate terms (and not these) apply. These Products are provided to you by Meta Platforms, Inc.</p>
                   <button className="btn" onClick={handlerClose}>CLOSE</button>
            </div>
        </div>
    )
}
export default Overlay;