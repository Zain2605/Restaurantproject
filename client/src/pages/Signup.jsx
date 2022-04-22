// //import React from "react";
// //import { Form, Button } from "react-bootstrap";
// import "./Signup.css"
// import React, { useState, useEffect } from "react";
// //import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// // import { Link } from "react-router-dom";
// // import Loading from "../components/Loading";
// // import ErrorMessage from "../components/ErrorMessage";
// import { register } from "../actions/userActions";
// //import MainScreen from "../components/MainScreen";


// const Login = ({ history }) => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");

//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState(null);

//   const dispatch = useDispatch();
//   const userRegister = useSelector((state) => state.userRegister);
//   const { loading, error, userInfo } = userRegister;

//   useEffect(() => {
//     if (userInfo) {
//       history.push("/");
//     }
//   }, [history, userInfo]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (password !== confirmpassword) {
//       setMessage("Passwords do not match");
//       console.log("Passwords dont match");
//     } else {
//       dispatch(register(name, email, password));
//     }
//   };



// //export default function Login() {
//   return (
//     <>
//     <div className="container" id="signupContainer"> 
//      <form onSubmit={submitHandler}>
         
//      <div class="mb-3">
//     <label for="name" class="form-label">Name</label>
//     <input type="text" value={name} class="form-control" onChange={(e) => setName(e.target.value)} id="name"/>
//   </div>
//   <div class="mb-3">
//     <label for="Email" class="form-label">Email address</label>
//     <input type="email" value={email} class="form-control" onChange={(e) => setEmail(e.target.value)} id="Email" />
    
//   </div>
//   <div class="mb-3">
//     <label for="Password" class="form-label">Password</label>
//     <input type="password" value={password} class="form-control" onChange={(e) => setPassword(e.target.value)} id="Password"/>
//   </div>

//   <div class="mb-3">
//     <label for="Password" class="form-label">Confirm Password</label>
//     <input type="password" value={confirmpassword} class="form-control" onChange={(e) => setConfirmPassword(e.target.value)} id="confirm-Password"/>
//   </div>
 
//   <button type="submit" class="btn btn-primary" id="signupbtn">SignUp</button>
// </form>
// </div> 
//     </>
//   );
// }
// export default Login;
