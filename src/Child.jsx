import React from 'react'
import CountContext from './CounterContext'
import { useContext } from 'react'
export default function Child() {

    let countValue = useContext(CountContext)
    // console.log(countValue)
  return (
    <>
    <div>Child: {countValue[0]}</div>

    <button onClick={()=>{countValue[1](++countValue[0])}}>Button</button>
    </>
  )
}
