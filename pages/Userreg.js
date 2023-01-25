import React from "react";
function Userreg(){
    return(
<>
    <header>
            <h3>Sign Up</h3><br/>
        </header>
        <div class="container">
            <div class="input-group mb-5"id="iname">
                <span class="input-group-text">First Name</span>
                <input class="form-control" id="name" type="name" placeholder="Enter First Name"></input>
            </div>
            <div class="input-group mb-5"id="iname">
                <span class="input-group-text">Last Name</span>
                <input class="form-control" id="name" type="name" placeholder="Enter Last Name"></input>
            </div>
            <div  class="input-group mb-5" id="em">
                <span class="input-group-text">Email</span>
                <input class="form-control" id="em" type="email" placeholder="Enter Email"></input>
            </div>
            <div  class="input-group mb-5" id="cn">
                <span class="input-group-text">Contact Number</span>
                <input class="form-control" id="cn" type="tel" placeholder="Enter Contact Number"></input>
            </div>
            <div id="pswd1">
                <label for="pswd" class="form-label">Set Password:</label>
                <input type="password" id="pswd" class="form-control" placeholder="Enter Password"></input>
            </div>
        </div>
        <button type="submit" id="submit"class="btn btn-lg mb-5"><a href="Dashboard" id="colr">Sign Up</a></button>
    <div class="container-fluid">
        <footer id="contact">
            <div class="mt-5 px-5">
                <h1 id="hd1">Contact Us:</h1>
                <br/>
                <p id="p1"><i class="bi bi-envelope"></i>Email: atharvvt14@gmail.com</p>
                <br/>
                <p id="p1"><i class="bi bi-person-rolodex"></i>  mobile no: 8688535513</p>
                <br/>
                <p id="p1"><i class="bi bi-github"></i>Github id:<a href="https://github.com/CodifyAT">CodifyAT</a></p>
            </div>
        </footer>
    </div>
</>
    );
}
export default Userreg;
