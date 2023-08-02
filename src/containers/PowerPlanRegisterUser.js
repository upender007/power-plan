import React, { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import debounce from 'lodash.debounce';
import CardComponent from "../Components/CardComponent";
import Accordion from "../Components/Accordion";
import Checkbox from "../Components/Checkbox/Checkbox";
import Overlay from "../Components/Overlay/Overlay";
import InputField from "../Components/InputField/InputField";

export default function PowerPlanRegisterUser(props) {
  const { localization } = props;
  const [plans, setPlans] = useState([]);
  const [helperText, setHelperText] = useState("helper");
  const [userName, setUserName] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({});
  
  const changeHandler=debounce((value)=>{
   setUserName(value)
  },1000)

  
    useEffect(()=>{
      fetch('/api/username',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: userName})
        }).then((response)=>response.json()).then((json) => setHelperText(json.data));
  },[userName])
  
  useEffect(() => {
    fetch("/api/plans")
      .then((response) => response.json())
      .then((json) => setPlans(json.plans));
    fetch("/api/selectedPlan")
      .then((response) => response.json())
      .then((json) => setSelectedPlan(json.plan));
  }, []);

 const [overlays, setOverlays] = useState(false);



  return (
    <>
      {localization && (
        <CardComponent className="cardbox">
          <form id="power-plan-form">
            <Dropdown
              width="17rem"
              plans={plans}
              selectedPlan={selectedPlan}
            ></Dropdown>
            <InputField
              label="Username"
              name="username"
              width="17rem"
              type="text"
              id="username"
              height="35px"
              helperText={helperText}
              changeHandler={changeHandler}
            ></InputField>
          </form>
          <Checkbox ol = {setOverlays}/>
          <Accordion data={localization.AccordianData} />
        </CardComponent>
      )}
      {
        overlays && <Overlay ol = {setOverlays}/>
      }
    </>
  );
}
