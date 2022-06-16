import React, {useEffect} from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../stylesheets/pagination.css"
import "../js/main.js"
import { Link } from 'react-router-dom';
import $ from "jquery"
import Topbar from './Topbar';
import Sidebar from './Sidebar';

import Businessloantable from './Tables/Businessloantable';




const Businessloan = () => {
    useEffect(() =>{
        document.title = "Business Loan | Credisol Admin"
    },[])

return(
    <div>
   <div class="row">
                    <div class="col-md-2">
                   
                    <Sidebar/>
                    </div>

                    <div class="col-md-10 mainbody">
                        <Topbar/>                    
                        <Businessloantable/>
          
                      </div>
                  </div>





</div>
)

};


export default Businessloan;