
import './App.css';
import React from "react"
import Parent from './Parent';
import Parent2 from './Parent2';
import CountContext from './CounterContext'
import { useState } from 'react';
import reducer from './CounterReducer';
function App() {
  let count = useState(0)
  return (
    <>
      <CountContext.Provider value={count}>
        {/* <Parent/> */}
        <Parent2 />
      </CountContext.Provider>
    </>

  );
}

export default App;
