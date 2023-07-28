import React from "react";
export default function Dropdown({ width, plans, selectedPlan }) {
  console.log(selectedPlan);
  return (
    <div className="dropdown-container ">
      <select
        name="power-plan"
        id="dropdown"
        defaultValue={selectedPlan.name}
        style={{ width: width }}
      >
        {plans &&
          plans.map((item, index) => (
        <option key={index} id={item.id} value={item.name}>
                {item.name}
              </option>
            
          ))}
      </select>
    </div>
  );
}
