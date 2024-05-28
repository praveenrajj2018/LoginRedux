// import React, { useState, useEffect } from 'react';
import React, { useCallback, useState, useEffect } from "react"; // Import useEffect
import { useDropzone } from "react-dropzone";
//import { GiCancel } from "react-icons/gi";
//import { Button, Col, Modal, Row } from "react-bootstrap";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "../styles/Login.css";
import axios from 'axios';
import { Header } from "../Component/Header";
import { Sidenavbar } from "../Component/Sidenav";
import { Container, Card, Form} from 'react-bootstrap';
import { useDispatch, connect,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createLoginRequest } from '../action/LoginAction';
const Login =() =>{
    const[login,setLogin]=useState({
        username:'',
        password:'',

    });
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    const isSubmitted = useSelector((state) => state.login.isSubmitted);
    const navigate=useNavigate();
    

    useEffect(() => {
      if (isSubmitted) {
        navigate('/login'); // Navigate to the next page on success
      }
    }, [isSubmitted, navigate]);
    const handleShow = () => setShow(true);


    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        console.log("form", login);
    
        // Make a POST request to the JSON server
        const response = await axios.post('http://localhost:5298/swagger/v1/swagger.json', login);
        // http://localhost:3001/users
        console.log(response.data); // Log the response data
    
        dispatch(createLoginRequest(login));
      } catch (error) {
        console.error('Error creating course:', error);
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
      //  setCourse({ ...course, [e.target.name]: e.target.value });
      if (name === "username" && value === "password") {
        // Show modal for adding a new category
        handleShow();
    }
    };

    return(
        <>
        <Row>
        <Col md={12} ><Header /></Col>
        <Col md={12}>
          <Sidenavbar />
          <Container className='courseForm mt-5'>
          <h2>Login Page</h2>
          <hr />
          <Card className="course-form">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="addcourse">
                  {/* Course Title */}
                  <Row>
                    <label>
                      USERNAME:
                      <input
                        type="text"
                        name="username"
                        placeholder="enter your username"
                        value={login.username}
                        onChange={handleInputChange}
                      />
                    </label>
                    {errors.title && <p className="error">{errors.title}</p>}
                  </Row>
                  {/* Course Category */}
                   
                  <Row>
                    <label>
                      PASSWORD:
                      <input
                        type="text"
                        min="0"
                        name='password'
                        placeholder="Enter the password"
                        
                        value={login.password}
                        onChange={handleInputChange}
                      />
                    </label>
                    {errors.duration && <p className="error">{errors.duration}</p>}
                  </Row>
                  <Row>
                    <Button type="submit">SUBMIT</Button>
                    {errors.duration && <p className="error">{errors.duration}</p>}
                  </Row>
                </div>
              </Form>   
            </Card.Body>
          </Card>
          </Container>
        </Col>
      </Row>
        </>
    );
} 

export default Login;