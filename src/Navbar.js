import React, { useState } from 'react'
import './style.css';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
 
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
  <div className="container-fluid">
    <a className="navbar-brand fs-1 text-warning" href="#">{props.Name}</a>
  <ul className='d-flex container'>
<li className="mx-3 list-style-none pt-3"><Link to="/" className={`nav-link text-${props.textChange}`}>Home</Link></li>
<li className="mx-3 list-style-none pt-3"><Link to="about" className={`nav-link text-${props.textChange}`}>About</Link></li>
  </ul>
  </div>
    <div className="d-flex px-3">
    <div className="form-check form-switch">
  <input className="form-check-input cursor-pointer" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label forHTML="flexSwitchCheckDefault" className={`text-${props.textChange}`}>{props.Ld} dark mode</label>
</div>
    </div>
    
      
      
    
</nav>
  )
}

