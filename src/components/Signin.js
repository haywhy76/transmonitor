import React, { useState } from 'react';
import { Container, NavDropdown, Nav, Navbar, Form, FormControl, Button, Row, } from 'react-bootstrap'
import $ from "jquery"
import "../stylesheets/style.css"




const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [notify, setnotify] = useState("")

  const adminlogin = () => {

    if (email === "") {
      setnotify("Input your E-mail")
    }

    else if (password === "") {
      setnotify("Input your Password")
    }

    else {
      $(".spinner-border").css({ 'display': 'block' });
      var settingsthree = {


        "url": "https://credisol-app.herokuapp.com/v1/registration/admin/sign_in/",
        "method": "POST",
        "timeout": 0,
        "data":
        {
          "email": email,
          "password": password,
        },
        error: function (xhr, status, error) {
          console.log(xhr)
          if (xhr.responseJSON.error_code === "non_admin_email") {
            setnotify("Admin access only")
            $(".spinner-border").css({ 'display': 'none' });
          }
          else if (xhr.responseJSON.error_code === "validation_error") {
            setnotify("Admin access only")
            setnotify("Incorrect Password")
            $(".spinner-border").css({ 'display': 'none' });
          }
        },
      }
      $.ajax(settingsthree).done(function (responsetwo) {
        console.log(responsetwo)
        // if (responsetwo.user.is_staff != true) {
        //   setnotify("Admin Access Only.")
        //   $(".spinner-border").css({ 'display': 'none' });
        // }

        // else{
          console.log(responsetwo)
          localStorage.setItem("email", responsetwo.user.email)
          localStorage.setItem("firstname", responsetwo.user.first_name)
          localStorage.setItem("lastname", responsetwo.user.last_name)
          localStorage.setItem("phone", responsetwo.user.phone_number)
          localStorage.setItem("userid", responsetwo.user.id)
          localStorage.setItem("access_token", responsetwo.tokens.access)
          localStorage.setItem("role", responsetwo.user.role)
          localStorage.setItem("adminuserid", responsetwo.user.id)
  
     
          $(".spinner-border").css({ 'display': 'none' });
          window.location.replace("/home");
        }
      
      // }
      
      )
    }
  }

  return (
    <div>
      <p className="loginlogo"><img width="130px"  src="/images/logo.svg" /></p>
      <div className="row">
        <div className="col-md-4">

        </div>

        <div className="col-md-4 loginbox">
          <h1 class="logintitle">Admin Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <p class="" style={{textAlign:"center", color:"#DD3737", fontWeight:"bold"}}>{notify}</p>
            </Form.Group>
            <Button onClick={adminlogin} className='btn btn-block submitbutton' variant="primary">

              <div class="spinner-border spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
              </div>

              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-4">

        </div>
      </div>






    </div>
  )

};


export default Signin;