import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

export function SignUp(){

  const [validated, setValidated] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !passwordMatch) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
        event.preventDefault();
        const name = document.getElementById('userName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if(name && email && password && confirmPassword ){
            let formData = {
                name : name,
                email : email,
                password: password,
                confirmPassword :confirmPassword
            }
            axios.post("http://localhost:3001/admin/register",formData)
            .then(function (response) {
                console.log(response.data);
                if(response.data.status){
                  localStorage.setItem('isAuth' , true)
                  window.location.href="/"
                  swal("Welcome", response.data.message, "success")
                  .then(() => {
                
                    });
                }
                else{
                swal("Error", response.data.message, "warning")
                .then(() => {
                  localStorage.setItem('isAuth' , false)
                  });
                }
            })
            .catch(function (error) {
                localStorage.setItem('isAuth' , false)
                console.log("this is SuperUserError");
            });
        }
        else{
          localStorage.setItem('isAuth' , false)
        }
    }
    setValidated(true);
  };
 
  const validatePassword = (event) => {
    let id = event.target.id;
    let value = event.target.value;
 
    if(id == "password" ){
        setPassword(value);
    }
    if(id == "confirmPassword"){
      setConPassword(value);
    }
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if(password.length>7 && confirmPassword.length>7){
        setPasswordMatch(password === confirmPassword);
    }
    else{
        setPasswordMatch(false)
    }
   
};
    return(
        <>
        <style>
                          {
                            `
                            .inputField{
                              border: none;
                              border-bottom: 1px solid #515151;
                              background-color: transparent;
                             
                            }
                            .inputField:focus {
                              background-color: transparent;
                              outline: red;
                            }
                            .inputField::selection {
                              background-color: #c9b2b2;
                            }
                            .bar {
                              position: relative;
                              display: block;
                              
                            }
                            .bar:before, .bar:after {
                              content: '';
                              height: 3px;
                              width: 0;
                              bottom: 1px;
                              position: absolute;
                              background: #5264AE;
                              transition: 0.2s ease all;
                              -moz-transition: 0.2s ease all;
                              -webkit-transition: 0.2s ease all;
                            }
                            .bar:before {
                              left: 50%;
                            }
                            .bar:after {
                              right: 50%;
                            }
                            .inputField:focus ~ .bar:before,
                            .inputField:focus ~ .bar:after {
                              width: 50%;
                            }
                            `
                          }
        </style>
        
        <div className="signup_container">
        <Container className="signUpContainerCenter" >
            <Row>
                <Col xs lg="2"></Col>
                
                <Col lg="8" md="auto" className="h-100 d-flex justify-content-center align-items-center">
                
                    <div className="signUpForm">
                      <h2 className="text-center fw-bolder">Sign Up</h2>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row className="mb-4 mt-3 mx-xl-4 mx-0">
                            <Form.Group as={Col} md="5" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    id="userName" className="shadow inputField"
                                    required
                                    type="text"
                                    placeholder="Enter the Name"
                                    pattern="[A-Za-z].{3,}" title="Username must contain only characters and have a length greater than 3"
                                />
                                <span className="bar"></span>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Name.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="7" className="mt-xl-0 mt-3">  
                              <Form.Label>Email</Form.Label>
                                  <Form.Control required  className="shadow inputField" id="email" 
                                    type="email"
                                    placeholder="Enter the email" 
                                    title="example@gmail.com"
                                    />
                                   <span className="bar"></span>
                              <Form.Control.Feedback type="invalid">
                                  Please provide a valid email.
                              </Form.Control.Feedback>
                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                      </Row>
                      <Row className="mb-4 mx-xl-5 px-xl-5 mx-0 px-0">
                      <Form.Group as={Col} md="12" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    id="password" className="shadow inputField"
                                    required
                                    type="password" onChange={validatePassword} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                    placeholder="Enter the Password"
                                    title = "Minimum 8 Characters, One Uppercase, One Lowercase, One Digit, One Special Character"
                                  
                                />
                                <span className="bar"></span>
                                <Form.Control.Feedback  type="invalid">
                                  {passwordMatch? "Pattern doesnot Match" : "Passwords do not match"}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback >
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                      </Row>
                      <Row className="mb-4 mx-xl-5 px-xl-5 mx-0 px-0">
                      <Form.Group as={Col} md="12" >
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    id="confirmPassword" className="shadow inputField"
                                    required
                                    type="password" onChange={validatePassword} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                    placeholder="Enter the Password"
                                    title = "Minimum 8 Characters, One Uppercase, One Lowercase, One Digit, One Special Character"

                                   
                                />
                                <span className="bar"></span>
                                <Form.Control.Feedback  type="invalid">
                                  {passwordMatch ? "Pattern doesnot Match" : "Passwords do not match"}
                              </Form.Control.Feedback>
                              <Form.Control.Feedback >
                                      Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                            <div className="text-center d-flex align-items-center justify-content-center mt-4">
                              <div className="d-inline-block forZoom"><Button type="submit" className='addProductBtn px-4 ' variant="none" style={{background: '#c389ff'}}>Sign Up</Button></div>
                          </div>  
                          <div className= "mb-5 text-center mt-3">
                        Already Have an Account? 
                        <Link className=" px-2 fw-bold text-decoration-none h5" to="/" >Sign In </Link>
                      </div>
                      </Row>
                      </Form>
                      </div>
                      
                </Col>
                
                <Col xs lg="2"></Col>
            </Row>
        </Container>
        </div>
        
        </>
    )
}