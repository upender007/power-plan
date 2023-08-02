import React from "react";
import './checkbox.scss'
import Overlay from "../Overlay/Overlay";
function Checkbox(props) {
   function handler(){
    props.ol(true);
   }
  return (
    <div className="" style={{display:"flex",justifyContent:"center"}}>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" style={{marginTop:"0.4rem"}}  />
      <p className="termsandcondition" onClick={handler}>Accept Terms And Condition</p>
    </div>
  );
}
export default Checkbox;
// we have performed the chenge in dev environment and we are discussing with business
