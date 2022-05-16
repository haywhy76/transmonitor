import React from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../js/main.js"
const Topbar = () => {
  


return(

<nav class="navbar navbar-expand-lg navbar-light bg-light thenavbar">
  <a class="navbar-brand logo" href="#">TransMonitor</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">


    <div class="input-group mb-3 searchbaricon">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"> <img src="/images/search.svg"/></span>
  </div>
  <input type="text" class="form-control topsearchico" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"/>
</div>
  
   

    </ul>


  
    <ul class="navbar-nav">
    
      <li class="nav-item support">
        <a class="nav-link" href="#">Support</a>
      </li>

      <li class="nav-item  rightnavmenu faq">
        <a class="nav-link" href="#">FAQ</a>
      </li>

      <li class="nav-item  rightnavmenu notify">
      <a class="nav-link" href="#">
      <img src="/images/bell.svg"/>
      </a>
      </li>

      <li class="nav-item  rightnavmenu">
        <a class="nav-link" href="#"><span class="hello">Hello</span></a>
        <a class="nav-link" href="#"><span class="name">Oluwaleke Ojo</span></a>
      </li>

      <li class="nav-item ">
        <a class="nav-link" href="#"> <img class="avatar" src="/images/user.svg"/></a>
       
      </li>
    </ul>
  </div>
</nav>


)

};


export default Topbar;