import React from "react";
export default function Dropdown({ width, allValues, selectedValue }) {
  return (
    <div className="dropdown-container ">
      <select
        name="power-plan"
        id="dropdown"
        defaultValue={selectedValue}
        style={{ width: width }}
      >
        {allValues &&
          allValues.map((item, index) => (
            <option key={index} value={item.value}>
              {item.value}
            </option>
          ))}
      </select>
    </div>
  );
}
