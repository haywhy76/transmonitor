import React, {useEffect} from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../js/main.js"
import Chart from 'chart.js/auto';
// import {Line} from 'react-chartjs'

// var Chart = require('chart.js/');

const Graph = () => {
    useEffect(() =>{
    var xValues = ["Jan","Feb", "Mar" , "Apr", "May" , "June" , "July", " Aug" , "Sep" , "Oct ", "Nov" , "Dec"];
    var yValues = [7,8,8,9,9,9,10,11,14,14,15];
    
    new Chart("Chartone", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
            // label: "My Dataset",
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        plugins:{   
            legend: {
              display: false
                    },
                 },
        tooltips: {
            enabled: false
         },
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
      }
    });
},)

return(

<div className="graphbox">

    <div className="row thegraphbox">
        <div className="col-md-8">
            <div className="row">
                <div className="col-md-4">
                <p class="statstitle">Today: 5, Aug 2018</p> 
                </div>
                <div className="col-md-3">
                <select class="form-control form-select  showall2" aria-label="Default select example">
<option selected>1 Jan - 1 Jun</option>
<option value="1">1 Jun - 1 Aug</option>

</select>
                </div>
                <div className="col-md-4 mobilearrows">
                   <img src="/images/leftarrow.svg"/>
                   <img class="rightarrow" src="/images/rightarrow.svg"/>
                </div>
            </div>
            <canvas id="Chartone" style={{width:"100%"}}></canvas>


</div>

<div className="col-md-4 orderbox">
<p class="statstitle">Orders</p>

<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
    <span class="sr-only">70% Complete</span>
  </div>
</div>


<p  class="statstext">Pending Orders: <span class="statno1">20</span></p>
<p  class="statstext">Reconciled Orders: <span class="statno2">80</span></p>
<p  class="statstext lastorder">Total Orders: <span class="statno3">100</span></p>

<p  class="statstitle statstitlepayments">Payments</p>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
    <span class="sr-only">70% Complete</span>
  </div>
</div>
<p  class="statstext">Un-reconciled Payments: <span class="statno1">20</span></p>
<p  class="statstext">Reconciled Payments: <span class="statno2">80</span></p>
<p  class="statstext">Total Payments: <span class="statno3">100</span></p>
</div>

  

    </div>



</div>


)

};


export default Graph;