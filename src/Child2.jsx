import React, { useReducer } from 'react'
import reducer from './CounterReducer'
export default function Child2() {
    let [state,dispatch] = useReducer(reducer,0)
    console.log(state)
  return (
    <>
    <div>child2 value is {state}</div>
    <button onClick={()=>{dispatch("INCREMENT")}}> INclrment</button>
    <button onClick={()=>{dispatch("DECREMENT")}}> DECREMENT</button>
    
    </>
  )
}
