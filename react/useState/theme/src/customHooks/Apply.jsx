import React from 'react'
import ReturnName from './ReturnName.jsx'

export default function Apply() {
    const [name, setEmail] = ReturnName("hello")
    console.log(setEmail("nitin"))
  return(<>  
  <h1>{name}</h1>
  </>)  
  
}
