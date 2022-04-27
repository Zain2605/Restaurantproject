import React from "react";
import './Landing.css'
import {Link, NavLink} from 'react-router-dom'
import logo from "./mzlogo.jpg";
export default function Landing() {
  return (
    <>
        <nav className="navbar navbar-expand-lg " >
            <div className="container-fluid">
                <NavLink className="navbar-brand " to={"/"}><h2 id="title">Blue Nile Restaurant</h2></NavLink>
                <form className="d-flex">
                    <NavLink to={"/login"}>
                          <button className="btn btn-outline-dark m-3" id="btn-log" type="submit" >Login </button>
                    </NavLink>
                    <NavLink to={"/RegisterScreen"}>
                        <button className="btn btn-outline-dark m-3" id="btn-signup" type="submit">Sign Up</button>
                    </NavLink>
                </form>
            </div>
        </nav>
   
      
    </>
  );
}
