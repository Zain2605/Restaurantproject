import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
export default function Login() {
  return (
    <>
    

<div className="container" id="loginContainer"> 
     <form>
         
  <div class="mb-3">
    <label for="Email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="Email" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary" id="logbtn">Login</button>
</form>
</div>
    </>
  );
}
