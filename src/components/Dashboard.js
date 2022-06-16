import React, {useState, useEffect} from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../stylesheets/pagination.css"
import "../js/main.js"
import $ from "jquery"
import Topbar from './Topbar';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';



const Dashboard = () => {
    const [totalNumber, setTotalNumber] = useState(0);

    useEffect(() => {
    var settingsone = {
        "url": "https://api-staging.zipawoof.com/api/v1/admin/customerss",
        "method": "GET",
        "timeout": 0,
          "headers": {
             "client-key": "a77abe617d55f568ccfde37111268614",
             "Authorization": "Bearer "+  localStorage.getItem("access_token")
            }
      }
      $.ajax(settingsone).done(function (responseone) {
        console.log(responseone)
      var totalrecords = (responseone.data.totalRecords).toLocaleString()
      setTotalNumber(totalrecords)
      })
    })

return(
    <div>
   <div class="row">
                    <div class="col-md-2">
                   
    <Sidebar/>
                    </div>

                    <div class="col-md-10 mainbody">
                        <Topbar/>
               
                      
                        <div id="customers"></div>
                    <div className="statsbox">
                    {/* <p className='greetingsmain'>Good afternoon, Super Admin</p> */}

                    <p className='greetings'>Customers</p>
<div className="row">

<div className="col-md-3  thestatsbox">
    <div className="row">
        <div className="col-md-8 col-8">
        <p className="stattitle">Total</p>
        <p className="statfigure">{totalNumber}</p>
        </div>

     
    </div>
</div>

<div className="col-md-3  thestatsbox">
    <div className="row">
        <div className="col-md-8">
        <p className="stattitle">Today</p>
        <p className="statfigure">0</p>
        </div>

      
    </div>
</div>

<div className="col-md-3  thestatsbox">
    <div className="row">
        <div className="col-md-8">
        <p className="stattitle">This Week</p>
        <p className="statfigure">0</p>
        </div>

  
    </div>
</div>

<div className="col-md-3  thestatsbox">
    <div className="row">
        <div className="col-md-8">
        <p className="stattitle">This Month</p>
        <p className="statfigure">0</p>
        </div>


    </div>
</div>

</div>




</div>


          
                      </div>
                  </div>





</div>
)

};


export default Dashboard;