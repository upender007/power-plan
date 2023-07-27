import React from "react";


export default function InputField({ label, name, width, type, id,height }) {
  return (
    <div className="input-field-container">
      <div className="label-container" style={{ left: 0 }}>
        <label for={id}>{label}</label>
      </div>
      <div className="inputBox-container">
        <input type={type} id={id} name={name} style={{ width: width,height:height }}></input>
      </div>
    </div>
  );
}
