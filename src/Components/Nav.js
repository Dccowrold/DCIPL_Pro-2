import React from 'react';
import logo from '../assests/log.png';
import '../App.css';

import { Link } from "react-router-dom";

function LogoutNow() {
  alert("You have Successfully Logged Out. Hope to see you again.")
  localStorage.removeItem("IsSignIn");
  localStorage.removeItem("User");
  localStorage.removeItem("Email");
  window.location.reload();
}
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function Nav({IsSignIn, setIsSignIn}) {
  
	return (
<>
    {IsSignIn ? (

  <>
  <header className="header">
  <a href="./"><img src={logo} className="logo" alt=""></img></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
		
  <ul className="menu">
  <li><a href="../">Home</a></li>
    <li><a href="../about">About</a></li>
    <li><a href="../blog">Blog</a></li>
    <li><a href="../careers">Careers</a></li>
    <li><button onClick={LogoutNow} >Logout</button></li>


  </ul>
</header>
<div className="progress-container">
    <div className="progress-bar" id="myBar"></div>
  </div> 


</>
      ) : (

		<>
		<header className="header">
  <a href="./"><img src={logo} className="logo" alt=""></img></a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
  <li><a href="/Home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="./blog">Blog</a></li>
    <li><a href="./careers">Careers</a></li>
    <li><a href="./login">Login</a></li>
    <li><a href="./register">Register</a></li>
  </ul>
</header>
<div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div> 
</>
     )}
</>
		)
};

export default Nav;
