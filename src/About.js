import { useNavigate } from 'react-router-dom'
import React from 'react'
import Headers from './Headers'
export default function About() {
  let navigate = useNavigate()
  const gotocontact = () =>{
    navigate("/Textform")

  }


  let goback = () =>{
  
    navigate(-1)
  }

  return (
    <div>


    <h1>This is about page</h1>
    <button onClick={gotocontact}>Go to Textform page</button>
    <button onClick={goback}>Go back</button>
      
    </div>
  )
}
