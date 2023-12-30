import React, { useState } from 'react'
import './style.css'
export default function Navbar(props) {
 
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
  <div className="container-fluid">
    <a className="navbar-brand fs-1 text-warning" href="#">{props.Name}</a>
  </div>
    <div className="d-flex">
    <div className="form-check form-switch">
  <input className="form-check-input cursor-pointer" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label forHTML="flexSwitchCheckDefault" className={`text-${props.textChange}`}>{props.Ld} dark mode</label>
</div>
    </div>
    
      
      
    
</nav>
  )
}

