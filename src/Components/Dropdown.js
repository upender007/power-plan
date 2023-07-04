import React from "react";
import data from "../Services/Constants/DropDownValues.json";
import value from "../Services/Constants/DropDownSelectedValue";
export default function Dropdown() {
  return (
    <div className="dropdown ">
      <select name="power-plan" id="dropdown" defaultValue={value}>
        {data &&
          data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.value}
            </option>
          ))}
      </select>
    </div>
  );
}
