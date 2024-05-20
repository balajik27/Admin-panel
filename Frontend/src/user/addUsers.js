
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ADD_USER } from '../actions/user';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
// import swal from 'sweetalert';

export function AddUser() {

    const [validated, setValidated] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);

    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    // useEffect(()=>{
    //     axios.get("http://localhost:3001")
    //         .then(function (response) {
    //             console.log(response.data);
                // dispatch({type:'ADDUSER' , payload:response})
    //         })
    //         .catch(function (error) {
    //             console.log("this is error");
    //         });
    //     console.log("first load");
    // },[])
    
    const dispatch = useDispatch();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !passwordMatch) {
      event.preventDefault();
      event.stopPropagation();
     

    }
    else{
        event.preventDefault();
        // event.stopPropagation();
   
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // console.log("product category  ", prodCategory); 
        if(firstName && lastName && email && password ){
           
            let formData = {
                firstName : firstName,
                lastName : lastName,
                email : email,
                password: password,
                confirmPassword :confirmPassword
            }
            dispatch(ADD_USER(formData))
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
    // let pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    if(password.length>7 && confirmPassword.length>7){
        setPasswordMatch(password === confirmPassword);
    }
    else{
        setPasswordMatch(false)
    }
    
    // console.log("this is id = ", id);
    // console.log("password = ",password);
    // console.log("confirm password = ",conPassword);
    // console.log("true or not = ",password === conPassword);
   
};
  return (
    <Container>

        {/* This row is for heading */}
        <Row className="justify-content-md-center">
        <Col xs lg="2">
        
        </Col>
        <Col md="auto">
        <div>
                <h2 className='ProdHeadTitle fw-bolder'>ADD USER</h2>
            </div>
        </Col>
        <Col xs lg="2">
        
        </Col>
        </Row>  

        {/* This row is whole form content */}
        <Row className="justify-content-md-center" data-aos="fade-up">
        <Col xs lg="2"></Col>
        <Col md="auto" style={{width: '650px'}}>
        {/* <style>
        {`
          .innerDivForInput {
            width: 650px;
          }

          @media (min-width: 320px) and (max-width: 500px) {
            .innerDivForInput {
              width: 400px;
            }
          }
        `}
      </style> */}
            <div className='innerDivForInput' >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className="mb-3">
            
            <Form.Group as={Col} md="6" >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    required
                    type="text" className="shadow"
                    placeholder="Enter the First name"
                    pattern=".{3,}"
                    id='firstName'
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid First Name.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    required
                    type="text" className="shadow"
                    placeholder="Enter the Last name"
                    id='lastName'
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid Last Name.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            
            
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" >
                <Form.Control
                        required
                        type="email" className="shadow"
                        placeholder="Enter the Email"
                        id="email"
                    />
                    <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                    </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="shadow" id="password" value={password}  onChange={validatePassword} placeholder="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required  />
                
                <Form.Control.Feedback  type="invalid">
                        {passwordMatch ? "Looks good!" : "Passwords do not match"}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback >
                        Looks good!
                    </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" className="shadow" id="confirmPassword" value={conPassword} onChange={validatePassword} placeholder="Confirm Password"pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required  />
                {/* <Form.Control.Feedback type="invalid">
                    Please provide a valid Confirm Password.
                </Form.Control.Feedback> */}
                <Form.Control.Feedback  type="invalid">
                        {passwordMatch ? "" : "Passwords do not match"}
                    </Form.Control.Feedback>
                <Form.Control.Feedback >
                        Looks good!
                    </Form.Control.Feedback>
            </Form.Group>
            <ul className="text-muted small mt-4 ps-3 ms-3">
                <li>At least one lowercase letter</li>
                <li>At least one uppercase letter</li>
                <li>At least one digit</li>
                <li>At least one special character</li>
                {/* <li>At least 8 characters, consisting of letters (uppercase and lowercase), digits, and the specified special characters</li> */}
            </ul>

           
        </Row>
        <Form.Group className="mb-3">
        </Form.Group>
        {/* <div style={{textAlign:'center' , marginTop:'42px'}}>
            <Button type="submit" className='rounded-pill px-4' >Submit</Button>
        </div> */}
        <div className="text-center d-flex align-items-center justify-content-center mt-4 mb-5">
                    <div className="d-inline-block forZoom  me-3"><Link to="/users" className="h1"><i className="text-secondary fa-solid fa-circle-arrow-left "></i> </Link></div>
                    <div className="d-inline-block forZoom"><Button type="submit" className='addProductBtn px-4' variant="primary">Submit</Button></div>
                </div>
        </Form>
        </div>
        </Col>
        <Col xs lg="2">
        
        </Col>
        </Row>
   
  </Container>
      
  
  );
}

// export default AddProduct;

// export function AddProduct(){
//     return(
//         <>
//             hello
        
//         </>
//     )
// }

