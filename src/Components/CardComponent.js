import React from "react";
import "../Assets/Styles/style.scss";
export default function CardComponent({className, children}){
    return(
        <div className="parent-box">
              <div className={className}>
                 {children}
              </div>
        </div>
    )
}