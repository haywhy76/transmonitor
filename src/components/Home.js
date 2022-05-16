import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import "../stylesheets/style.css"
import "../js/main.js"


const Home = () => {
  useEffect(() =>{
    document.title = "Home | Transmonitor"
},[])
 
  
    return (
      
      <div>
                  <Topbar/>
                  <div class="row">
                    <div class="col-md-2">
                    <Sidebar/>
                    </div>

                    <div class="col-md-10" style={{backgroundColor:"#F7F8FA"}}>
                    
                    <Dashboard/>
                      </div>
                  </div>
               
    </div>

  


    )
    
    
}


export {Home as default}