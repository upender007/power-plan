import React, { useState } from "react";
import "./style.scss";
import { AccordianData } from "../../localization/de-DE/accordion";

export default function Accordian(props){
    const { data } = props.data;
    const [indexes, setIndexes] = useState([])
    function handler(index){
         if(indexes.includes(index)){
            setIndexes(indexes.filter((i)=> i !== index))
         }else{
            setIndexes([...indexes,index]);
         }
    }
    return(
        <div className="accordian-parent">
              {
                AccordianData.map((value,index)=>(
                    <div className="accordian-child" key={index}>
                         <div className="accordian-question" onClick={()=>handler(index)}>
                         <p>{value.question}</p>
                         <p className="open-close">{indexes.includes(index) ? "❌" : "➕"}</p>
                         </div>
                         {indexes.includes(index) && <p className="accordian-answer">{value.answer}</p>}
                    </div>
                ))
              }
        </div>
    );
}