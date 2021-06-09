import React from 'react';
import LoopOverObject from './LoopOverObject';
import { printData } from '../data/data';

import './style.css';

export default function App() {
  return (
    <div>
      <h1>Print Object Data</h1>
      <LoopOverObject objData={printData} />
    </div>
  );
}
