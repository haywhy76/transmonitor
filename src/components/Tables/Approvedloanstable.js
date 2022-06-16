import React, { useState, useEffect } from "react";
import "../../stylesheets/style.css"
import { Container, Modal, NavDropdown, Nav, Navbar, Form, FormControl, Button, Row, } from 'react-bootstrap'
import $ from "jquery"
import "../../js/paginathing.js"


function Approvedloanstable() {

  const [loanid, setLoanId] = useState();
  const [username, setUserName] = useState();
  const [amount, setAmount] = useState();
  const [duration, setDuration] = useState();
  const [firstname, setFirstname] = useState();
  const [loanofferid, setLoanofferid] = useState("")
  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")

  // CREDIT OFFICER MODALS
  const [approvecoshow, setApproveCoShow] = useState(false);
  const [declinecoshow, setDeclineCoShow] = useState(false);
  const handleCoApproveClose = () => setApproveCoShow(false);
  const handleCoDeclineClose = () => setDeclineCoShow(false);

  const [totalNumber, setTotalNumber] = useState("(...)");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [passport, setpassport ] = useState("/images/passport.svg");
  const [additionaldocument, setadditionaldocument ] = useState("/images/offerletter.svg");
  const [ passporturl, setpassporturl ] = useState("");
  const [ additionaldocumenturl, setadditionaldocumenturl ] = useState("");
  var userrole = localStorage.getItem("role")

  let theuserrole
if(userrole === "CO"){
  theuserrole = "Credit Officer"
}

else if(userrole === "CC"){
  theuserrole = "Credit Committee"
}

else if(userrole === "HOC"){
  theuserrole = "Head of Department"
}

else if(userrole === "ACC"){
  theuserrole = "Accountant"
}
  const [role, setRole] = useState(theuserrole)
  const [adminuserid, setAdminuserid] = useState(localStorage.getItem("adminuserid"))

  const hideAppProductModal = () => {
    setShowAddProduct(false);
  };

  const toggleProductModal = () => {
    setShowAddProduct(true);
  };




// LOAN LOAN DATA
  useEffect(() => {
    var a = []
    var settings = {
        "url": `https://credisol-app.herokuapp.com/v1/loans/all/?status=approved`,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer " + localStorage.getItem("access_token")
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response)
      var totalrecords = response.length
      setTotalNumber(totalrecords)
      $.each(response, function (i) {

        var table = document.getElementById('records_table');
        var tr = document.createElement('tr');
        var defaultDates = response[i].created_at
        var d = new Date(defaultDates).toString();
        var actualdate = d.split(' ').splice(0, 5).join(' ')

        let currency
        let loantype
        if (response[i].foreign_currency === "dollar") {
          currency = "$"
        }

        else {
          currency = "&#163;"
        }

        if (response[i].offer_code === "RO-VF-PF"){
            loantype = "P.O.F"
            }

            else if (response[i].offer_code === "RO-BL-BL"){
                loantype = "P.O.F"
                }

        var td1 = document.createElement('td');
        td1.innerText = response[i].loan_id;
        var td2 = document.createElement('td');
        td2.innerHTML = response[i].user
        var td3 = document.createElement('td');
        td3.innerHTML = response[i].first_name
        var td4 = document.createElement('td');
        td4.innerHTML = response[i].last_name
        var td5 = document.createElement('td');
        td5.innerHTML = actualdate
        var td6 = document.createElement('td');
        td6.innerHTML = "Naira: &#x20A6;" + parseInt(response[i].principal).toLocaleString() 
        var td7 = document.createElement('td');
        td7.innerHTML = response[i].duration + " Months"
        var td8 = document.createElement('td');
        td8.innerHTML = loantype
        var td9 = document.createElement('td');
        td9.innerHTML = response[i].credit_officer
        // var td6 = document.createElement('td');
        // td6.innerHTML = "C.O: " + "Approved" + "<br/>" + "C.R.O " + "Pending" + "<br/>" + "C.C " + "Pending" + "<br/>" + "Account " + "Pending"
        
        // var td8 = document.createElement('td');
        // td8.innerHTML = response[i].country_of_visit
        // var td9 = document.createElement('td');
        // td9.innerHTML = response[i].travel_reason
        // var td10 = document.createElement('td');
        // td10.innerHTML = `<a target='_blank' href='${response[i].passport}'><img class='tableimage' src='${response[i].passport}'/></a>`
        // var td11 = document.createElement('td');
        // td11.innerHTML = `<a target='_blank' href='${response[i].additional_documents.document_url}'><img class='tableimage' src='${response[i].additional_documents[0].document_url}'/></a>`
        // var td12 = document.createElement('td');
        var td10 = document.createElement('td');
        td10.innerHTML = "<button class='verifybutton'>" + "View more" + "</button>"
        // var td11 = document.createElement('td');
        // td11.innerHTML = "<button class='blockbutton'>" + "Decline" + "</button>"


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        tr.appendChild(td10);
        // tr.appendChild(td11);
   


        table.appendChild(tr);

        td10.onclick = function () {
          setLoanId(td1.innerText)
          setApproveCoShow(true)
          var settings = {
            "url": `https://credisol-app.herokuapp.com/v1/loans/all/` + td1.innerText,
          "method": "GET",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer " + localStorage.getItem("access_token")
          }
        }
        $.ajax(settings).done(function (response) {
            console.log(response)
            document.getElementById("passport").src = response.passport
            document.getElementById("adoc").src = response.additional_documents[0].document_url
            document.getElementById("passportlink").src = response.passport
            document.getElementById("adoclink").src = response.additional_documents[0].document_url
        })
        };

     

      });
    }).then(function () {
      console.log($('#records_table'))
      $('#records_table').paginathing({
        perPage: 20,
        insertAfter: '.table',
        pageNumbers: true
      });
    })

    //   var settingsthree = {
    //     "url": "https://api-staging.zipawoof.com/api/v1/admin/customers",
    //     "method": "GET",
    //     "headers": {
    //        "client-key": "a77abe617d55f568ccfde37111268614",
    //        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWyiwuVrJSqsosSCzPz09T0lHKTCxRsjI0MzUxMDM0tzDSUUqtKIAJmBqDBBJLSzK8UyuB2sLdSzySDUyDo4xyypJcw4KB2kuLU4tCKgtSgbKJKbmZeSATU4AcM6icJ4RTCwBQmL1negAAAA.GHOrtCXAnUr3NN10SVqS4swgFNf1GVmeea23fJTGL_Y"
    //       },
    //     "timeout": 0,
    //      error: function(xhr, status, error) {
    //        console.log(xhr)      
    // }, }
    //     $.ajax(settingsthree).done(function (responsetwo) {

    //        setData(responsetwo.data.records)   

    //       })


  }, [])




    




  return (

    <div className="App">


      <div className="paymentbox">
        <h5 class="thecount">Approved Loans {totalNumber}  <span class="filtericon">

          {/* <a class="btn btn-danger" data-toggle="collapse" href="#filteroptions"
            role="button" aria-expanded="false" aria-controls="collapseExample">
            <i class="fas fa-filter"></i>
          </a> */}
          {/* <button onClick={toggleProductModal} className="apply"><i class="fas fa-plus"></i> Create POF Loan</button> */}

        </span></h5>

        <div class="collapse filteroptions" id="filteroptions">
          <div className="">
            <h1 class="sidebyside">Filter By</h1>
            <div className="row">

              <div className="col-md-2 col-3">
                <label className="customerlabel">Auctions Created From</label>
                <Form.Control type="date" id="from" placeholder="Enter product name" />
              </div>



              <div className="col-md-2 col-3">
                <label className="customerlabel">Auctions Created Till</label>
                <Form.Control type="date" id="to" />
              </div>


              <div className="col-md-2 col-3">
                <label className="customerlabel">Auction Type</label>
                <select class="form-control" aria-label="Default select example">

                  <option value="All">All</option>
                  <option value="Free Bid">Free Bid</option>
                  <option value="Pay per bid">Pay per Bid</option>
                  <option value="Richest">Pay per Bid</option>
                </select>
              </div>

              <div className="col-md-2 col-3">
                <label className="customerlabel">Live Date</label>
                <Form.Control type="date" id="to" />
              </div>

              <div className="col-md-2 col-3">
                <label className="customerlabel">Auction Status</label>
                <select class="form-control" aria-label="Default select example">

                  <option value="All">All</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Going Live">Going Live</option>
                  <option value="Live">Live</option>
                </select>
              </div>

              <div className="col-md-2 col-3">
                <label className="customerlabel">Auction Visibility</label>
                <select class="form-control" aria-label="Default select example">

                  <option value="All">All</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Going Live">Going Live</option>
                  <option value="Live">Live</option>
                </select>
              </div>




            </div>

            <p class="filterbuttons">
              <button className="clearall">Clear all</button>
              <button className="apply">Apply</button>
            </p>


            <div className="col-md-12">
              {/* <Customerstable/> */}


            </div>

          </div>
        </div>

        <div className="col-md-12">
          {/* <Customerstable/> */}
          <table class="table css-serial" id="approvedloanstable">
            <thead class="thead-dark">
              <tr class="ippisschedulehead">


                <th class="ippiscol0" scope="col">LOAN I.D</th>
                <th class="ippiscol0" scope="col">USER I.D</th>
                <th class="ippiscol0" scope="col">FIRST NAME</th>
                <th class="ippiscol0" scope="col">LAST NAME</th>
                <th class="ippiscol0" scope="col">DATE APPLIED</th>
                <th class="ippiscol0" scope="col">AMOUNT</th>
                <th class="ippiscol0" scope="col">DURATION</th>
                <th class="ippiscol0" scope="col">LOAN TYPE</th>
                <th class="ippiscol0" scope="col">LOAN OFFICER</th>
                {/* <th class="ippiscol0" scope="col">STATUS</th> */}
                {/* <th class="ippiscol0" scope="col">COUNTRY OF VISIT</th>
                <th class="ippiscol0" scope="col">REASON</th>
                <th class="ippiscol0" scope="col">PASSPORT</th>
                <th class="ippiscol0" scope="col">ADDITIONAL DOC</th> */}
                <th class="ippiscol0" scope="col">ACTIONS</th>
                {/* <th class="ippiscol0" scope="col"></th> */}



              </tr>
            </thead>
            <tbody id="records_table">
            </tbody>
          </table>


          {/* MODALS */}
          {/* CREDIT OFFICER MODAL */}
          <Modal show={approvecoshow} onHide={handleCoApproveClose}>
            <Modal.Header closeButton>
              <Modal.Title class="modaltitle">Loan Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">
            
<div className="row">
    <div className="col md-6">
               <a id="passportlink" target="_blank" href=""><img width="150px" height="150px" id="passport" src=""/></a> 
    </div>

    <div className="col md-6">
    <a id="adoclink" target="_blank" href=""> <img id="adoc" width="150px" height="150px" src=""/></a>
        </div>
</div>
              
<p class="" style={{ color:"#DD3737", fontWeight:"bold", textAlign:"center", paddingTop:"20px"}}>{notify2}</p>

              </Modal.Body>

            <p className="modalbuttons" style={{marginRight:"30px"}}>
              <button className="verifybutton" onClick={handleCoApproveClose}>
                Close
              </button>

              {/* <button className="successbutton" onClick={approveLoan}>
                 Approve
              </button> */}
            </p>

          </Modal>

          <Modal show={declinecoshow} onHide={handleCoDeclineClose}>
            <Modal.Header closeButton>
            <Modal.Title class="modaltitle">{role}: Decline Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">
              

            <Form>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Why are you declining this loan request ?</Form.Label>
  <Form.Control as="textarea"  id="declinecomment"  rows={3} />
</Form.Group>
</Form>
                          
<p class="" style={{ color:"#DD3737", fontWeight:"bold", textAlign:"center", paddingTop:"20px"}}>{notify2}</p>

              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" onClick={handleCoDeclineClose}>
                Close
              </button>

              {/* <button className="blockbuttonmodal" onClick={declineLoan}>
               Decline
              </button> */}
            </p>

          </Modal>
          {/* CREDIT OFFICER MODAL */}

                 {/* HOC MODAL */}
                 {/* <Modal show={approvehocshow} onHide={handleHocApproveClose}>
            <Modal.Header closeButton>
              <Modal.Title class="modaltitle">Head of Department: Approve Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">

             <Form>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Why are you approving this loan request ?</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
              
              
              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" onClick={handleHocApproveClose}>
                Cancel
              </button>

              <button className="successbutton" onClick={handleHocApproveClose}>
                 Approve
              </button>
            </p>

          </Modal>

          <Modal show={declinehocshow} onHide={handleHocDeclineClose}>
            <Modal.Header closeButton>
            <Modal.Title class="modaltitle">Head of Department: Decline Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">
              

            <Form>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Why are you declining this loan request ?</Form.Label>
  <Form.Control as="textarea" rows={3} />
</Form.Group>
</Form>
                          
              
              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" onClick={handleHocDeclineClose}>
                Cancel
              </button>

              <button className="blockbuttonmodal" onClick={handleHocDeclineClose}>
               Decline
              </button>
            </p>

          </Modal> */}
          {/* HOC MODAL */}

                         {/* CC MODAL */}
                         {/* <Modal show={approveccshow} onHide={handleCcApproveClose}>
            <Modal.Header closeButton>
              <Modal.Title class="modaltitle">Credit Committee: Approve Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">

             <Form>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Why are you approving this loan request ?</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
              
              
              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" onClick={handleCcApproveClose}>
                Cancel
              </button>

              <button className="successbutton" onClick={handleCcApproveClose}>
                 Approve
              </button>
            </p>

          </Modal>

          <Modal show={declineccshow} onHide={handleCcDeclineClose}>
            <Modal.Header closeButton>
            <Modal.Title class="modaltitle">Credit Committee: Decline Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">
              

            <Form>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Why are you declining this loan request ?</Form.Label>
  <Form.Control as="textarea" rows={3} />
</Form.Group>
</Form>
                          
              
              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" onClick={handleCcDeclineClose}>
                Cancel
              </button>

              <button className="blockbuttonmodal" onClick={handleCcDeclineClose}>
               Decline
              </button>
            </p>

          </Modal> */}
          {/* CC MODAL */}

                                 {/* ACCOUNT MODAL */}
                                 {/* <Modal show={approveaccshow} onHide={handleAccApproveClose}>
            <Modal.Header closeButton>
              <Modal.Title class="modaltitle">Accountant: Approve Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">

             <Form>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Why are you approving this loan request ?</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
              
              
              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" onClick={handleAccApproveClose}>
                Cancel
              </button>

              <button className="successbutton" onClick={handleAccApproveClose}>
                 Approve
              </button>
            </p>

          </Modal>

          <Modal show={declineaccshow} onHide={handleAccDeclineClose}>
            <Modal.Header closeButton>
            <Modal.Title class="modaltitle">Accountant: Decline Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">
              

            <Form>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Why are you declining this loan request ?</Form.Label>
  <Form.Control as="textarea" rows={3} />
</Form.Group>
</Form>
                          
              
              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" onClick={handleAccDeclineClose}>
                Cancel
              </button>

              <button className="blockbuttonmodal" onClick={handleAccDeclineClose}>
               Decline
              </button>
            </p>

          </Modal> */}
          {/* ACCOUNT MODAL */}





















     













          {/* MODALS */}
        </div>






      </div>

      <br />
      <br />
      <br />
    </div>
  );
}


export default Approvedloanstable;