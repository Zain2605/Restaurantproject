import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'


const Header = ({ setSearch }) => {

    const userInfo = JSON.parse(localStorage.getItem('user')) || "";
    const logoutHandler = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("selectedItem");
        window.location.replace("http://localhost:3000/");
    };

    return (
        <Navbar collapseOnSelect expand="lg"  variant="light" style={{
            'backgroundColor' : '#f6b319'
        }}>
        <Container>
        <NavLink to={"/"}> <Navbar.Brand href="/" style={{color:"darkblue",fontStyle:"italic",textTransform:"uppercase",textShadow: "2px 2px rgb(185, 98, 98)"}}><h2 className="text-center">Blue Nile Restaurant</h2></Navbar.Brand></NavLink>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto"></Nav>

                <Nav>

                {userInfo? (
                <>
                    <Nav.Link href="/">Home page</Nav.Link>
                    <NavDropdown
                    title={`${userInfo.email}`}
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
