import React from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, } from 'react-bootstrap'
import "../stylesheets/style.css"
import "../js/main.js"
import Graph from './Graph';
import Payments from './Payments';
import Stats from './Stats';

const Dashboard = () => {
  


return(
    <div>
<Stats/>
<Graph/>
<Payments/>
</div>
)

};


export default Dashboard;