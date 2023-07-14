import React, { useEffect } from "react";
import CardComponent from "../components/CardComponent";
import styles from "../assets/Styles/style.scss"
import Accordian from "../components/Accordian/Accordian";

export default function Body(){
    // sample way to use
    // useEffect(()=>{
    //     fetch('/api/username',{
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name: 'johndoe'})
    //       }).then((response)=>response.json()).then((json) => console.log(json));
    // },[])

    // useEffect(()=>{
    //     fetch('/api/plans').then((response)=>response.json()).then((json) => console.log(json));
    // },[])
    return(
        <>
            <CardComponent className = "cardbox">
                   <h1>Hello Card Component</h1>
                   <Accordian/>
            </CardComponent>

        </>
    );
}