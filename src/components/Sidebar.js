import React, {useState, useEffect} from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../stylesheets/pagination.css"
import "../js/main.js"
import $ from "jquery"
import Topbar from './Topbar';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [totalNumber, setTotalNumber] = useState(0);

    useEffect(() => {
    var settingsone = {
        "url": "https://credisol-app.herokuapp.com/v1/loans/all",
        "method": "GET",
        "timeout": 0,
          "headers": {
             "client-key": "a77abe617d55f568ccfde37111268614",
             "Authorization": "Bearer "+  localStorage.getItem("access_token")
            }
      }
      $.ajax(settingsone).done(function (responseone) {
        console.log(responseone)
      var totalrecords = (responseone).toLocaleString()
      setTotalNumber(totalrecords)
      })
    })

return(
    <div>
       <div class="row thesidebarrow">
    <div class="thesidebar">

 <p class="generateinvoicep"><img  width="130px" src="/images/logo.svg"/></p>


 <Nav.Link className="" as={Link} to="/home"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'> <i class="fas fa-home"></i> <span className="thenavbarmenuspan">   Home</span> </p>
</Nav.Link>
{/* <Nav.Link className="" as={Link} to="/customers"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-user-friends"></i> <span className="thenavbarmenuspan"> Apply</span></p>
</Nav.Link> */}
{/* <Nav.Link className="" as={Link} to="/products"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="far fa-object-group"></i><span className="thenavbarmenuspan"> Approve  Consumer Loan</span></p>
</Nav.Link> */}
<Nav.Link className="" as={Link} to="/businessloan"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-briefcase"></i><span className="thenavbarmenuspan"> Business Loan </span></p>
</Nav.Link>
<Nav.Link className="" as={Link} to="/pof"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-coins"></i> <span className="thenavbarmenuspan"> P.O.F Loan</span></p>
</Nav.Link>
<Nav.Link className="" as={Link} to="/loanstatus"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-coins"></i> <span className="thenavbarmenuspan"> Loan Status</span></p>
</Nav.Link>
{/* <Nav.Link className="" as={Link} to="/wallet"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-dollar-sign"></i> <span className="thenavbarmenuspan"> Loan Status</span></p>
</Nav.Link> */}
<Nav.Link className="" as={Link} to="/approvedloans"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-check"></i> <span className="thenavbarmenuspan">Approved Loans</span></p>
</Nav.Link>
<Nav.Link className="" as={Link} to="/declinedloans"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-times-circle"></i> <span className="thenavbarmenuspan">Declined Loans</span></p>
</Nav.Link>

{/* <Nav.Link className="" as={Link} to="/usermanagement"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-user-circle"></i><span className="thenavbarmenuspan"> User Management</span></p>
</Nav.Link>
<Nav.Link className="" as={Link} to="/rolemanagement"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-cog"></i> <span className="thenavbarmenuspan">Role Management</span></p>
</Nav.Link>
<Nav.Link className="" as={Link} to="/settings"  eventKey="2" activeClassName="is-active" >
<p className='thenavbarmenu'><i class="fas fa-cog"></i> <span className="thenavbarmenuspan">System Settings</span></p>
</Nav.Link> */}
{/* <Nav.Link className="" as={Link} to="/"  eventKey="2" activeClassName="is-active" > */}
<a href="/" style={{textDecoration:"none"}}>
<p className='thenavbarmenu'><i class="fas fa-sign-out-alt"></i> <span className="thenavbarmenuspan">Logout</span></p>
</a>
{/* </Nav.Link> */}




          </div>

      
      </div>





</div>
)

};


export default Sidebar;