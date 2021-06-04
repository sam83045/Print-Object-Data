import React from "react";
import "./KeyValueCard.css";

export default function KeyValueCard({objKey,value}) {
  return (
    <div class="singleKeyValue">
      <span class="clsKey">{objKey}</span>
      <span class="clsValue">{value}</span>
      
    </div>
  );
}