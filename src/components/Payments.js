import React from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../js/main.js"


const Payments = () => {
  


return(


<div className="paymentbox">
    <p class="payments">Payments</p>
    <div className="row">
        <div className="col-md-1 col-2">
<p class="sidebyside">Showing</p> 
</div>

<div className="col-md-1 col-3">
 <select class="form-select form-select-sm firstselect" aria-label="Default select example">
  <option selected>20</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
<div className="col-md-2 col-6">
<p class="sidebyside">out of 500 payments</p> 

        </div>


        <div className="col-md-2 searchpayments">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text paymentsearchico" id="basic-addon1"> <img src="/images/search.svg"/></span>
  </div>
  <input type="text" class="form-control paymentsearchicon" placeholder="Search payments" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
        </div>


        <div className="col-md-1">


</div>


        <div className="col-md-1">

        <p class="sidebyside">Show</p> 
        </div>

        <div className="col-md-2">

<select class="form-control form-select  showall" aria-label="Default select example">
<option selected>All</option>
<option value="1">Reconciled</option>
<option value="2">Un-reconciled</option>
<option value="3">Settled</option>
<option value="3">Unettled</option>
</select>
</div>

<div className="col-md-12">


<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col tablehead">Item Type</th>
      <th scope="col">Price</th>
      <th scope="col">Transaction No</th>
      <th scope="col">Time</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
      <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary tablebutton"><img src="/images/undot.svg"/> Un-reconciled</button> <img class="downarrow" src="/images/downarrow.svg"/></td>
    </tr>
    <tr>
    <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
    <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary  tablebutton"><img src="/images/undot.svg"/> Un-reconciled</button> <img class="downarrow" src="/images/downarrow.svg"/></td>

    </tr>

    <tr>
    <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
    <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary  tablebutton"><img src="/images/recdot.svg"/> <span class="reconciled">Reconciled</span></button><img class="downarrow" src="/images/downarrow.svg"/></td>

    </tr>

    <tr>
    <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
    <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary  tablebutton"><img src="/images/undot.svg"/> Un-reconciled</button><img class="downarrow" src="/images/downarrow.svg"/></td>

    </tr>

    <tr>
    <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
    <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary  tablebutton"><img src="/images/pendingdot.svg"/> <span class="pending">Pending</span></button><img class="downarrow" src="/images/downarrow.svg"/></td>

    </tr>

    <tr>
    <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
    <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary  tablebutton"><img src="/images/undot.svg"/> Un-reconciled</button><img class="downarrow" src="/images/downarrow.svg"/></td>

    </tr>

    <tr>
    <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
    <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary  tablebutton"><img src="/images/recdot.svg"/> <span class="reconciled">Reconciled</span></button><img class="downarrow" src="/images/downarrow.svg"/></td>

    </tr>

    <tr>
    <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
    <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary  tablebutton"><img src="/images/undot.svg"/> Un-reconciled</button><img class="downarrow" src="/images/downarrow.svg"/></td>

    </tr>

    <tr>
    <th scope="row"><img src="/images/tableicon.svg"/> <span className="tabletext">Apple Mac Book 15” 250 SSD 12GB</span></th>
    <td className="tablesubtext">$73,430</td>
      <td className="tablesubtext">1234567890</td>
      <td className="tablesubtext">12:30</td>
      <td><button class="btn btn-outline-secondary  tablebutton"><img src="/images/pendingdot.svg"/> <span class="pending">Pending</span></button><img class="downarrow" src="/images/downarrow.svg"/></td>

    </tr>
  </tbody>
</table>

<p class="sidebyside footer"><span class="footermobile">Showing 1 to 10 of 500 entries</span>
<span style={{float:"right"}}>
<span class="navigation">Previous</span>
<span class="navigation navigation1">1</span>
<span class="navigation navigation2">2</span>
<span class="navigation">Next</span>
</span>

</p> 


</div>

    </div>



</div>

)

};


export default Payments;