import React, {useEffect} from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../js/main.js"
import Chart from 'chart.js/auto';



const Stats = () => {
    useEffect(() =>{
        var xValues = [50,60,70];
        var yValues = [7,8,8];
        
        new Chart("Charttwo", {
          type: "line",
          data: {
            labels: xValues,
            datasets: [{
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            scales: {
              yAxes: [{ticks: {min: 6, max:16}}],
            }
          }
        });
    },)


return(

<div className="statsbox">

<div className="row">

<div className="col-md-3  thestatsbox">
    <div className="row">
        <div className="col-md-8 col-8">
        <p className="stattitle">Daily Transaction Volume</p>
        <p className="statfigure">2,342</p>
        </div>

        <div className="col-md-4 col-4 Charttwo">
           <img src="/images/chart.svg"/>
            </div>
    </div>
</div>

<div className="col-md-3  thestatsbox">
    <div className="row">
        <div className="col-md-8">
        <p className="stattitle">Daily Transaction Volume</p>
        <p className="statfigure">2,342</p>
        </div>

        <div className="col-md-4">
            
            </div>
    </div>
</div>

<div className="col-md-3  thestatsbox">
    <div className="row">
        <div className="col-md-8">
        <p className="stattitle">Daily Transaction Volume</p>
        <p className="statfigure">2,342</p>
        </div>

        <div className="col-md-4">
        <img src="/images/chart.svg"/>
            </div>
    </div>
</div>

<div className="col-md-3  thestatsbox">
    <div className="row">
        <div className="col-md-8">
        <p className="stattitle">Daily Transaction Volume</p>
        <p className="statfigure">2,342</p>
        </div>

        <div className="col-md-4">
        <img src="/images/chart.svg"/>
            </div>
    </div>
</div>

</div>



</div>
)

};


export default Stats;