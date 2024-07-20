import React, { useState,useContext } from "react"; 
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import "../styles/login.css";
import register from "../assets/images/register.jpg";

import {AuthContext} from "./../context/AuthContext";
import { BASE_URL } from "../utils/config";
const Register = () => {
    const [credentials, setCredentials] = useState({
        userName: undefined,
        email: undefined,
        password: undefined,
    });

    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/auth/register`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            })

            const result = await res.json()

            if (!res.ok) alert(result.message)

            dispatch({type: "REGISTER_SUCCESS"})
            navigate("/login")
                 
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="Register__img ">
                                <img src={register} alt="Login" />
                            </div>
                            <div className="Register__form">
                                <div className="user">
                                    <h2>Register</h2>
                                </div>
                                <Form onSubmit={handleClick}>
                                <FormGroup>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            id="username"
                                            required
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            required
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            required
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <Button
                                        type="submit"
                                        className="btn-block custom-button"
                                    >
                                        Create Account
                                    </Button>
                                </Form>
                                <div className="create-account">
                                    <p>
                                        Already have an account?{" "}
                                        <Link to="/login" style={{ color: 'black' }}>Login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register
