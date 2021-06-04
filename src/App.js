import React from 'react';
import LoopOverObject from "./LoopOverObject";

import './style.css';

const printData = {
  firstName: 'Shoaib',
  lastName: 'Konnur',
  Education: {
    SSC: '2005',
    HSC: '2007'
  }
};

export default function App() {
  return (
    <div>
      <h1>Print Object Data</h1>
      <LoopOverObject objData={printData}/>
    </div>
  );
}
