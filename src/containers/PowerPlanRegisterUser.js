import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import CardComponent from "../components/CardComponent";
import Accordion from "../components/Accordion";

export default function PowerPlanRegisterUser(props) {
  const { localization } = props;
  const [plans,setPlans]=useState([])
  const [selectedPlan,setSelectedPlan]=useState({})
  useEffect(()=>{
    fetch('/api/plans').then((response)=>response.json()).then((json) => setPlans(json.plans));
    fetch('/api/selectedPlan').then((response)=>response.json()).then((json) => setSelectedPlan(json.plan));
},[])


  return (
    <>
      {localization && (
        <CardComponent className="cardbox">
          <form id="power-plan-form">
              <Dropdown width="17rem" plans={plans} selectedPlan={selectedPlan}></Dropdown>
          </form>
          <Accordion data={localization.AccordianData} />
        </CardComponent>
      )}
    </>
  );
}
