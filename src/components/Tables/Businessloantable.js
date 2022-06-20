import React, { useState, useEffect } from "react";
import "../../stylesheets/style.css"
import { Container, Modal, NavDropdown, Nav, Navbar, Form, FormControl, Button, Row, } from 'react-bootstrap'
import $ from "jquery"
import "../../js/paginathing.js"


function Businessloantable() {

  const [loanid, setLoanId] = useState();
  const [loanId2, setLoanId2] = useState();
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
  const [morecoshow, setMoreCoShow] = useState(false);
  const handleCoApproveClose = () => setApproveCoShow(false);
  const handleCoDeclineClose = () => setDeclineCoShow(false);
  const handleCoMoreClose = () => setMoreCoShow(false);
  const [totalNumber, setTotalNumber] = useState("(...)");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [passport, setpassport ] = useState("/images/passport.svg");
  const [additionaldocument, setadditionaldocument ] = useState("/images/offerletter.svg");
  const [ passporturl, setpassporturl ] = useState("");
  const [ additionaldocumenturl, setadditionaldocumenturl ] = useState("");


  const [crcreport, setcrcreport ] = useState("/images/crcreport.svg");
  const [cvreport, setcvreport ] = useState("/images/cvreport.svg");
  const [ crcreporturl, setcrcreporturl ] = useState("");
  const [ cvreporturl, setcvreporturl ] = useState("");


    // UPLOAD CERTIFICATE
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
     
      const data = new FormData()
      data.append("file", crcreport)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
        // beforeSend: function(){
        //   $('.loading').css("visibility", "visible");
        //   },
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setcrcreporturl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("crcreport").src = "/images/crcreport.svg"
        $(".overlay").fadeOut(0);
        // $('.loading').css("visibility", "hidden");
      }
      else{
        document.getElementById("crcreport").src = data.url
        $(".overlay").fadeOut(0);
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
      }
  
  
      })
      .catch(err => console.log(err))
       
    },[crcreport])
      // UPLOAD CERTIFICATE
  
  
    // UPLOAD COLLATERAL
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
      const data = new FormData()
      data.append("file", cvreport)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
        // beforeSend: function(){
        //   $('.loading').css("visibility", "visible");
        //   },
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setcvreporturl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("cvreport").src = "/images/cvreport.svg"
        $(".overlay").fadeOut(0);
        // $('.loading').css("visibility", "hidden");
      }
      else{
        document.getElementById("cvreport").src = data.url
        $(".overlay").fadeOut(0);
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
      }
      })
      .catch(err => console.log(err))
    },[cvreport])
    // UPLOAD COLLATERAL
  






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

    // UPLOAD PASSPORT
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
     
      const data = new FormData()
      console.log(data)
      data.append("file", passport)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
        // beforeSend: function(){
        //   $('.loading').css("visibility", "visible");
        //   },
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setpassporturl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("passport").src = "/images/passport.svg"
        $(".overlay").fadeOut(0);
        // $('.loading').css("visibility", "hidden");
      }
      else{
        document.getElementById("passport").src = data.url
        $(".overlay").fadeOut(0);
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
      }
  
  
      })
      .catch(err => console.log(err))
       
    
    
    },[passport])
      // UPLOAD PASSPORT
  
  
    // UPLOAD ADDITIONAL DOCUMENT
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
      const data = new FormData()
      data.append("file", additionaldocument)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
        // beforeSend: function(){
        //   $('.loading').css("visibility", "visible");
        //   },
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setadditionaldocumenturl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("additionaldocument").src = "/images/additionaldocument.svg"
        $(".overlay").fadeOut(0);
        // $('.loading').css("visibility", "hidden");
      }
      else{
        document.getElementById("additionaldocument").src = data.url
        $(".overlay").fadeOut(0);
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
      }
      })
      .catch(err => console.log(err))
    },[additionaldocument])
    // UPLOAD ADDITIONAL DOCUMENT
  


// LOAN LOAN DATA
  useEffect(() => {
    var a = []
    var settings = {
      "url": `https://credisol-app.herokuapp.com/v1/loans/all/undecided_approvals/`,
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
        if(response[i].offer_code === "RO-BL-BL"){
        var table = document.getElementById('records_table');
        var tr = document.createElement('tr');
        var defaultDates = response[i].created_at
        var d = new Date(defaultDates).toString();
        var actualdate = d.split(' ').splice(0, 5).join(' ')

        let directors
        let type

        if (response[i].number_of_directors === null) {
          directors = "1"
        }
        else {
          directors = response[i].number_of_directors 
        }

        if (response[i].registration_type === "bn") {
          type = "Business name"
        }
        else   if (response[i].registration_type === "ltd") {
          type = "Limited"
        }

    


        // else{
        //   director1bvn = "Empty"
        // }

        // if(response[i].directors[1].bvn){
        //   director2bvn = response[i].directors[1].bvn
        // }

        // else{
        //   director2bvn = "Empty"
        // }

        var td1 = document.createElement('td');
        td1.innerText = response[i].loan_id;

        var td2 = document.createElement('td');
        td2.innerText = response[i].id;

        var td3 = document.createElement('td');
        td3.innerHTML = response[i].user;
        var td4 = document.createElement('td');
        td4.innerHTML = response[i].first_name
        var td5 = document.createElement('td');
        td5.innerHTML = response[i].last_name
        var td6 = document.createElement('td');
        td6.innerHTML = actualdate
        var td7 = document.createElement('td');
        td7.innerHTML = "&#x20A6;" + parseInt(response[i].principal).toLocaleString() 
        var td8 = document.createElement('td');
        td8.innerHTML = response[i].duration + " Months"
        // var td6 = document.createElement('td');
        // td6.innerHTML = "C.O: " + "Approved" + "<br/>" + "C.R.O " + "Pending" + "<br/>" + "C.C " + "Pending" + "<br/>" + "Account " + "Pending"
        
        var td9 = document.createElement('td');
        td9.innerHTML = "&#x20A6;" +  parseInt(response[i].annual_turnover).toLocaleString() 
        var td10 = document.createElement('td');
        td10.innerHTML = type
        var td11 = document.createElement('td');
        td11.innerHTML = response[i].name_of_business
        var td12 = document.createElement('td');
        td12.innerHTML =  response[i].reg_number
        var td13 = document.createElement('td');
        td13.innerHTML =  directors
        var td14 = document.createElement('td');
        td14.innerHTML =   response[i].registration_date
        var td15 = document.createElement('td');
        td15.innerHTML =   response[i].city_of_incorporation
        var td16 = document.createElement('td');
        td16.innerHTML = "<button class='verifybutton'>" + "More" + "</button>"
        var td17 = document.createElement('td');
        td17.innerHTML = "<button class='verifybutton'>" + "Approve" + "</button>"
        var td18 = document.createElement('td');
        td18.innerHTML = "<button class='blockbutton'>" + "Decline" + "</button>"

        // td10.innerHTML = `<a target='_blank' href='${response[i].passport}'><img class='tableimage' src='${response[i].passport}'/></a>`

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
        tr.appendChild(td11);
        tr.appendChild(td12);
        tr.appendChild(td13);
        tr.appendChild(td14);
             tr.appendChild(td15);
             tr.appendChild(td16);
             tr.appendChild(td17);
                  tr.appendChild(td18);
        table.appendChild(tr);


        td16.onclick = function () {
          setLoanId(td1.innerText)
          
          setMoreCoShow(true)

          let director2fullname
          let director2bvn

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
        
        if(response.directors[1]){
          director2fullname = response.directors[1].full_name
          director2bvn = response.directors[1].bvn
        }
        else{
          console.log("doesnt exist")
          director2fullname = "Empty"
          director2bvn = "Empty"
        }

            document.getElementById("identificationlink").src =  response.additional_documents[0].document_url
            document.getElementById("identification").src = response.additional_documents[0].document_url

            document.getElementById("photographlink").src =  response.additional_documents[1].document_url
            document.getElementById("photograph").src = response.additional_documents[1].document_url

            document.getElementById("ownershiplink").src =  response.additional_documents[2].document_url
            document.getElementById("ownership").src = response.additional_documents[2].document_url

            document.getElementById("collaterallink").src =  response.additional_documents[3].document_url
            document.getElementById("collateral").src = response.additional_documents[3].document_url

            document.getElementById("certificatelink").src = response.additional_documents[4].document_url
            document.getElementById("certificate").src = response.additional_documents[4].document_url

            document.getElementById("director1name").innerHTML = response.directors[0].full_name
            document.getElementById("director1bvn").innerHTML = response.directors[0].bvn

            document.getElementById("director2name").innerHTML = director2fullname
            document.getElementById("director2bvn").innerHTML = director2bvn
        })
     
        };

        td17.onclick = function () {
          setLoanId(td1.innerText)
          setApproveCoShow(true)
          setLoanId2(td2.innerText)
          // console.log(loanId2)
        };

        td18.onclick = function () {
          setLoanId(td1.innerText)
          setDeclineCoShow(true)
  
    
        };
      }

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

// GET LOAN OFFER ID
useEffect(() =>{
  var settingsthree = {
    "url": "https://credisol-app.herokuapp.com/v1/loans/offers/proof_of_funds/",
    "method": "GET",
    "timeout": 0,
    "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
    error: function (xhr, status, error) {
      console.log(xhr)
   
    },
  }
  
  $.ajax(settingsthree).done(function (responsethree) {
    console.log(responsethree)
    setLoanofferid(responsethree.id)
    $(".overlay").fadeOut(0);
  })
},[])


// ADD NEW LOAN
const addloan = () =>{
  console.log(passporturl)
  console.log(typeof(additionaldocumenturl))
  if (passporturl === undefined){
    setnotify("Upload your international passport")
  }

  else if (additionaldocumenturl === undefined){
    setnotify("Upload an additional document")
  }

  else{
    setnotify("Processing...")

let adoc = [{
  'name': 'Additional Document',
  'document_url': additionaldocumenturl
}]

const obj ={
  "principal" : document.getElementById("amountlocal").value,
  "duration" : document.getElementById("duration").value,
  "country_of_visit" : document.getElementById("country").value,
  "travel_reason" : document.getElementById("reason").value,
  "foreign_currency" : document.getElementById("currency").value,
  "amount_requested_local" : document.getElementById("amountlocal").value,
  "amount_requested_foreign" : document.getElementById("amountforeign").value,
  "loan_offer" : loanofferid,
  "user":  document.getElementById("userid").value,
  "passport": passporturl,
  "additional_documents":  [{
    'name': 'Additional Document',
    'document_url': additionaldocumenturl
  }]
}

console.log(JSON.stringify(obj))
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/loans/pof/",
      "method": "POST",
      "timeout": 0,
      "headers": {
         "Authorization": "Bearer " + localStorage.getItem("access_token"),
       
        },
        "processData": false,
       "contentType": "application/json; charset=UTF-8",
      "data": JSON.stringify(obj),
      error: function (xhr, status, error) {
        console.log(xhr)
     
      },
    }
    
    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      window.location.replace("/pof");
    })
  }


}

// APPROVE LOAN
const approveLoan = () =>{
console.log(crcreport)
console.log(adminuserid)
console.log(document.getElementById("approvecomment").value)

  if (document.getElementById("approvecomment").value === ""){
    setnotify2("Input a comment")
  }

  else  if (crcreport === "/images/crcreport.svg"){
    setnotify2("Select CRC report")
  }

  else  if (cvreport === "/images/cvreport.svg"){
    setnotify2("Select CV report")
  }

  else{
    setnotify2("Processing...")
    const obj ={  
      "status" : "approved",
      "comments" : document.getElementById("approvecomment").value,
      "loan" : loanid,
      "user" : adminuserid,
    }

    const obj2 ={  
  
      "additional_documents":  [
        {
         'name': 'crc report',
          'document_url': crcreporturl
      },
      {
        'name': 'cv report',
         'document_url': cvreporturl
     }
    ],
    }


    var settingsthree = { 
      "url": "https://credisol-app.herokuapp.com/v1/loans/approvalss/",
      "method": "POST",
      "timeout": 0,
      "headers": {
         "Authorization": "Bearer " + localStorage.getItem("access_token"),
        },
  
        "processData": false,
        "contentType": "application/json; charset=UTF-8",
       "data": JSON.stringify(obj),
      error: function (xhr, status, error) {
        console.log(xhr)
      },
    }
    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      // window.location.replace("/pof");
    })
console.log(loanId2)
    var settingsfour = {
      "url": "https://credisol-app.herokuapp.com/v1/business_loans/"+loanId2,
      "method": "PATCH",
      "timeout": 0,
      "headers": {
         "Authorization": "Bearer " + localStorage.getItem("access_token"),
        },
  
        "processData": false,
        "contentType": "application/json; charset=UTF-8",
       "data": JSON.stringify(obj2),
      error: function (xhr, status, error) {
        console.log(xhr)
      },
    }
    $.ajax(settingsfour).done(function (responsefour) {
      console.log(responsefour)
      // window.location.replace("/pof");
    })




}


  
  }

  // APPROVE LOAN
  const declineLoan = () =>{
    console.log(loanid)
    console.log(adminuserid)
    console.log(document.getElementById("declinecomment").value)
    
      if (document.getElementById("declinecomment").value === ""){
        setnotify2("Input a comment")
      }
    
      else{
        setnotify2("Processing...")
        var settingsthree = {
          "url": "https://credisol-app.herokuapp.com/v1/loans/approvals/",
          "method": "POST",
          "timeout": 0,
          "headers": {
             "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
      
          "data":  { 
          "status" : "declined",
          "comments" : document.getElementById("declinecomment").value,
          "loan" : loanid,
          "user" : adminuserid,
       
          },
          error: function (xhr, status, error) {
            console.log(xhr)
          },
        }
        $.ajax(settingsthree).done(function (responsethree) {
          console.log(responsethree)
          window.location.replace("/pof");
        })
    }
    
    
      
      }
    
    
    




  return (

    <div className="App">


      <div className="paymentbox">
        <h5 class="thecount">Business Loan {totalNumber}  <span class="filtericon">

          {/* <a class="btn btn-danger" data-toggle="collapse" href="#filteroptions"
            role="button" aria-expanded="false" aria-controls="collapseExample">
            <i class="fas fa-filter"></i>
          </a> */}
          <button onClick={toggleProductModal} className="apply"><i class="fas fa-plus"></i> Create Business Loan</button>

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
          <table class="table css-serial" id="poftable">
            <thead class="thead-dark">
              <tr class="ippisschedulehead">


                <th class="ippiscol0" scope="col">LOAN I.D</th>
                <th class="ippiscol0" scope="col">B.L I.D</th>
                <th class="ippiscol0" scope="col">USER I.D</th>
                <th class="ippiscol0" scope="col">FIRST NAME</th>
                <th class="ippiscol0" scope="col">LAST NAME</th>
                <th class="ippiscol0" scope="col">DATE APPLIED</th>
                <th class="ippiscol0" scope="col">AMOUNT</th>
                <th class="ippiscol0" scope="col">DURATION</th>
                {/* <th class="ippiscol0" scope="col">STATUS</th> */}
                <th class="ippiscol0" scope="col">ANNUAL TUNOVER</th>
                <th class="ippiscol0" scope="col">REGISTRATION TYPE</th>
                <th class="ippiscol0" scope="col">NAME OF BUSINESS</th>
                <th class="ippiscol0" scope="col">REG NUMBER</th>
                <th class="ippiscol0" scope="col">NUMBER OF DIRECTORS</th>
                <th class="ippiscol0" scope="col">REGISTRATION DATE</th>
                <th class="ippiscol0" scope="col">CITY OF INCORPORATION</th>
                <th class="ippiscol0" scope="col">ACTIONS</th>
                <th class="ippiscol0" scope="col"></th>
                <th class="ippiscol0" scope="col"></th>



              </tr>
            </thead>
            <tbody id="records_table">
            </tbody>
          </table>


          {/* MODALS */}
          {/* CREDIT OFFICER MODAL */}
          <Modal show={approvecoshow} onHide={handleCoApproveClose}>
            <Modal.Header closeButton>
              <Modal.Title class="modaltitle">{role}: Approve Loan</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">


            <div className="row" style={{marginTop:"0px"}}>
    <div className="col-md-6">
      <p>Upload CRC report</p>
    <div class="image-upload empimgupload">
  <label for="file">
    <img class="mobileuploadimages" style={{marginBottom:"0px", cursor:"pointer "}} 
     id="crcreport"  width="183" height="100" src={ crcreport} />
  </label>
  <input type="file" id="file" onChange= {(e)=> setcrcreport(e.target.files[0])}></input>
</div>
    </div>

    <div className="col-md-6" style={{marginLeft:"0px"}}>
    <p>Upload car valuation report</p>
    <div class="image-upload empimgupload">
  <label for="file2">
    <img class="mobileuploadimages" style={{marginBottom:"0px", cursor:"pointer "}} 
     id="cvreport"  width="183" height="100" src={cvreport} />
  </label>
  <input type="file" id="file2" onChange= {(e)=> setcvreport(e.target.files[0])}></input>
</div>
</div>





</div>


             <Form style={{marginTop:"30px"}}>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Why are you approving this loan request ?</Form.Label>
    <Form.Control as="textarea" id="approvecomment" rows={3} />
  </Form.Group>
</Form>
              
<p class="" style={{ color:"#DD3737", fontWeight:"bold", textAlign:"center", paddingTop:"20px"}}>{notify2}</p>

              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" onClick={handleCoApproveClose}>
                Cancel
              </button>

              <button className="successbutton" onClick={approveLoan}>
                 Approve
              </button>
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
                Cancel
              </button>

              <button className="blockbuttonmodal" onClick={declineLoan}>
               Decline
              </button>
            </p>

          </Modal>

          <Modal show={morecoshow} onHide={handleCoMoreClose}>
            <Modal.Header closeButton>
            <Modal.Title class="modaltitle">{role}: View more</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalquestion">
              
            <div className="row">
    <div className="col md-6">
      <p>Means of ID</p>
               <a id="identificationlink" target="_blank" href=""><img width="150px" height="150px" id="identification" src=""/></a> 
    </div>

    <div className="col md-6">
    <p>Photograph</p>
    <a id="photographlink" target="_blank" href=""> <img id="photograph" width="150px" height="150px" src=""/></a>
        </div>

        <div className="col md-6">
      <p>Ownership</p>
               <a id="ownershiplink" target="_blank" href=""><img width="150px" height="150px" id="ownership" src=""/></a> 
    </div>

    <div className="col md-6">
    <p>Collateral</p>
    <a id="collaterallink" target="_blank" href=""> <img id="collateral" width="150px" height="150px" src=""/></a>
        </div>

        <div className="col md-6">
    <p>Certificate</p>
    <a id="certificatelink" target="_blank" href=""> <img id="certificate" width="150px" height="150px" src=""/></a>
        </div>

  
</div>

<div class="row" style={{marginTop:"40px"}}>
<div className="col md-6">
    <p>Director 1 Name: <span id="director1name"></span></p>
    <p>Director 1 BVN:  <span id="director1bvn"></span></p>
        </div>

        <div className="col md-6">
        <p>Director 2 Name: <span id="director2name"></span></p>
        <p>Director 2 BVN: <span id="director2bvn"></span></p>
        </div>
</div>
                          
<p class="" style={{ color:"#DD3737", fontWeight:"bold", textAlign:"center", paddingTop:"20px"}}>{notify2}</p>

              </Modal.Body>

            <p className="modalbuttons">
              <button className="verifybutton" style={{marginRight:"20px"}} onClick={handleCoMoreClose}>
                Cancel
              </button>

          
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





















          <Modal show={showAddProduct} onHide={hideAppProductModal} class="theactivatedmodal">
            <Modal.Header closeButton>
              <Modal.Title class="modaltitle">Create new POF loan</Modal.Title>
            </Modal.Header>

            <Modal.Body class="activatemodalbody">

            <div className="col-md-12">
                  <label className="customerlabel modaloption2">User ID</label>
                  <Form.Control type="text" id="userid" placeholder="Enter User ID" />

                </div>
                <div className="col-md-12">
              <label className="customerlabel modaloption1">Country of Visit</label>
             <select class="form-control" id="country">
    <option value="">- Select Country -</option>
    <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
  </select>
</div>
              <div className="row">
                <div className="col-md-6">
                  <label className="customerlabel modaloption2">Reason for Travelling</label>
                  <Form.Control type="text" id="reason" placeholder="Enter subscription cost" />

                </div>

                <div className="col-md-6">
               
<div class="form-group">
  <label for="sel1" className="customerlabel modaloption1" >Select Foreign Currency</label>
  <select class="form-control" id="currency">
    <option>- Select Currency -</option>
    <option value="dollar">Dollars</option>
    <option value="pounds">Pounds</option>
   

  </select>
</div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                <Form.Label  className="customerlabel modaloption2">Amount Requested (in local currency) </Form.Label>
      <Form.Control   id="amountlocal" width="60px" type="number" placeholder="Input amount in local currency" />
                </div>

                <div className="col-md-6">
                <Form.Label className="customerlabel modaloption2">Amount Requested (in foreign currency) </Form.Label>
      <Form.Control   id="amountforeign" width="60px" type="number" placeholder="Input amount in foreign currency" />
                </div>
              </div>

              <div className="col-md-12">
              <div class="form-group">
  <label for="sel1" className="customerlabel modaloption1">Loan Duration</label>
  <select class="form-control" id="duration">
  <option value="">- Select Duration -</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</div>
</div>
<div className="row" style={{marginTop:"40px"}}>
    <div className="col-md-6">
    <div class="image-upload empimgupload">
  <label for="file">
    <img class="mobileuploadimages" style={{marginBottom:"0px", cursor:"pointer "}} 
     id="passport"  width="183" height="100" src={ passport} />
  </label>
  <input type="file" id="file" onChange= {(e)=> setpassport(e.target.files[0])}></input>
</div>
    </div>

    <div className="col-md-6" style={{marginLeft:"0px"}}>
    <div class="image-upload empimgupload">
  <label for="file2">
    <img class="mobileuploadimages" style={{marginBottom:"0px", cursor:"pointer "}} 
     id="additionaldocument"  width="183" height="100" src={additionaldocument} />
  </label>
  <input type="file" id="file2" onChange= {(e)=> setadditionaldocument(e.target.files[0])}></input>
</div>
</div>





</div>
     
<p class="" style={{ color:"#DD3737", fontWeight:"bold", textAlign:"center", paddingTop:"20px"}}>{notify}</p>


              <button onClick={addloan} className="btn btn-block newloanbutton">Submit</button>
            </Modal.Body>

          </Modal>















          {/* MODALS */}
        </div>






      </div>

      <br />
      <br />
      <br />
    </div>
  );
}


export default Businessloantable;