import React from "react";
import CardComponent from "./CardComponent";
import styles from "../Assets/Styles/style.scss"
import Accordian from "./Accordian/Accordian";

export default function Body(){
    return(
        <>
            <CardComponent className = "cardbox">
                   <h1>Hello Card Component</h1>
                   <Accordian/>
            </CardComponent>

        </>
    );
}