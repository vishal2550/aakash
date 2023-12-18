import {  useNavigate } from 'react-router-dom'
import React from 'react'
import Headers from './Headers'

export default function Textform() {
  let navigate = useNavigate()
  let gotohomepage = () =>{
    navigate("/")
  }
  let goforword =()=>{
    navigate(+1)

  }
  return (
    <div>
    

    <h1>This is Textform page</h1>
    <button onClick={gotohomepage}>Go to Home</button>
      <button onClick={goforword}>go forword</button>
      
    </div>
  )
}
