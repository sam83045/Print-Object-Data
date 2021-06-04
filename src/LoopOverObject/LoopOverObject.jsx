import React from 'react';
import KeyValueCard from "../KeyValueCard";
import "./LoopOverObject.css";

export default function LoopOverObject({objData}) {
  return (
    <div>
      {Object.keys(objData).map(key1 => {
        if (typeof objData[key1] === 'string') {
          return (
            <KeyValueCard objKey={key1} key={key1} value={objData[key1]} />
          );
        } else {
         return <div class="nestedWrapper">
         <div>{key1}</div>
         <LoopOverObject objData={objData[key1]} />
         </div>
        }
      })}
    </div>
  );
}