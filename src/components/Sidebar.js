import React from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../js/main.js"
const Sidebar = () => {
  


return(
    <div class="row thesidebarrow">
    <div class="thesidebar">

 <p class="generateinvoicep"><button class="btn generateinvoice">GENERATE INVOICE</button></p>

<p className="thenavbarmenutitle">Main</p>
<p className='thenavbaractive'> <img className="" src="images/overview.svg"/> <span className="thenavbarmenuspan">   Overview</span> </p>

<p className="thenavbarmenutitle2">Payments</p>
<p className='thenavbarmenu'><img className="" src="images/allpayments.svg"/> <span className="thenavbarmenuspan thenavbarmenuspanactive"> All Payments</span></p>
<p className='thenavbarmenu'><img className="" src="images/reconsiled.svg"/><span className="thenavbarmenuspan"> Reconciled Payments</span></p>
<p className='thenavbarmenu'><img className="" src="images/unreconciled.svg"/><span className="thenavbarmenuspan"> Un-Reconciled Payments</span></p>
<p className='thenavbarmenu'><img className="" src="images/manual.svg"/> <span className="thenavbarmenuspan">Manual Settlement</span></p>

<p className="thenavbarmenutitle3">Orders</p>
<p className='thenavbarmenu'><img className="" src="images/allorders.svg"/> <span className="thenavbarmenuspan">All Orders</span></p>
<p className='thenavbarmenu'><img className="" src="images/pendingorders.svg"/> <span className="thenavbarmenuspan">Pending Orders</span></p>
<p className='thenavbarmenu'><img className="" src="images/reconsiledorders.svg"/> <span className="thenavbarmenuspan">Reconciled Orders</span></p>
<p className='thenavbarmenu'><img className="" src="images/merchant.svg"/> <span className="thenavbarmenuspan">Merchant Profile</span></p>



          </div>

      
      </div>



)

};


export default Sidebar;