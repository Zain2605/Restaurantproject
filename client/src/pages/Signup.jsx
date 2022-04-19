import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Signup.css"
export default function Login() {
  return (
    <>
    <div className="container" id="signupContainer"> 
     <form>
         
     <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name"/>
  </div>
  <div class="mb-3">
    <label for="Email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="Email" />
    
  </div>
  <div class="mb-3">
    <label for="Password" class="form-label">Password</label>
    <input type="password" class="form-control" id="Password"/>
  </div>

  <div class="mb-3">
    <label for="Password" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="confirm-Password"/>
  </div>
 
  <button type="submit" class="btn btn-primary" id="signupbtn">SignUp</button>
</form>
</div> 
    </>
  );
}
