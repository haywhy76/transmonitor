import React, {useEffect} from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../stylesheets/pagination.css"
import "../js/main.js"
import { Link } from 'react-router-dom';
import $ from "jquery"
import Topbar from './Topbar';
import Sidebar from './Sidebar';

import Approvedloanstable from './Tables/Approvedloanstable';




const Approvedloans = () => {
    useEffect(() =>{
        document.title = "Approved Loans | Credisol Admin"
    },[])

return(
    <div>
   <div class="row">
                    <div class="col-md-2">
                   
                    <Sidebar/>
                    </div>

                    <div class="col-md-10 mainbody">
                        <Topbar/>                    
                        <Approvedloanstable/>
          
                      </div>
                  </div>





</div>
)

};


export default Approvedloans;