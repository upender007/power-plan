import React, { useEffect } from "react";
import CardComponent from "../Components/CardComponent";
import Accordion from "../Components/Accordion";

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