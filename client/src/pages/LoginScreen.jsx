import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import MainScreen from "../components/MainScreen";
import "./LoginScreen.css";
import axios from "axios";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
    //   history.push("../components/Maincontent.jsx");
    }
  }, [history, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const body = {
        
            email,
            password
        }
        await axios.post('http://localhost:5000/users/login', body).then((res) => {
            console.log(res.data);
            console.log(res.status);
            if (res.status === 200) {
                localStorage.setItem("user", JSON.stringify(body));
                window.location.replace("http://localhost:3000/menu");
                alert("Login Successful");
            }
            else alert("Login Failed");
        
        }).catch((e) => {
            alert("Login Failed");
            console.log("Error :- ", e);
        })
    }; 

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              required
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User ? <Link to="/RegisterScreen">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
