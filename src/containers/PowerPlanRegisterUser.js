import React, { useEffect } from "react";
import CardComponent from "../components/CardComponent";
import Accordion from "../components/Accordion";

export default function PowerPlanRegisterUser(props){
    const {localization} = props;

    return(
        <>
        {localization &&
            <CardComponent className = "cardbox">
                   <Accordion data= {localization.AccordianData}/>
            </CardComponent>
        }
        </>
    );
}