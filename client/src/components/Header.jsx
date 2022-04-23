import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../actions/userActions";

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="#f6b319" variant="dark">
      <Container>
       <NavLink to={"/"}> <Navbar.Brand href="/" style={{color:"darkblue",fontStyle:"italic",textTransform:"uppercase",textShadow: "2px 2px rgb(185, 98, 98)"}}><h2 className="text-center">Blue Nile Restaurant</h2></Navbar.Brand></NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>

          <Nav>
            {/* <Nav.Link href="/markets">Markets</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link> */}
            {userInfo ? (
              <>
                <Nav.Link href="/Maincontent">Home page</Nav.Link>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <img
                      alt=".."
                      src={
                        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                      }
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    />
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <NavLink to={"/login"}  style={{color:"white",fontWeight:"bold",fontSize:"20px"}}>Login</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
