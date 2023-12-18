import "./App.css"
import React from 'react'
import {
  Route,
  BrowserRouter as Router, Routes
} from "react-router-dom";
import Home from './Home';
import About from "./About"
import Textform from './Textform';
import Navbar from './Navbar';
import Error from "./Error";




export default function App() {
  return (
    <Router>
      <Routes className="first">
        <Route path='/' element={<Home/>}>
        <Route path='/About' element={<About/>}/>
        <Route path='/Textform' element={<Textform/>}/>
        <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    
    </Router>
  )
}
