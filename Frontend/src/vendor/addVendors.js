import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import { useState , useEffect, useRef } from 'react'
import { ADD_VENDOR } from "../actions/vendor"
import { useDispatch } from "react-redux"
// import '../../public/assets/css/adminStyle.css'

import { Link } from 'react-router-dom'
export function AddVendor(){

    const [validated , setValidated] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit=(event)=>{
        const form = event.currentTarget;
        if(form.checkValidity() == false){
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            event.preventDefault();
       
            const vendorName = document.getElementById('vendorName').value;
            const vendorEmail = document.getElementById('vendorEmail').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const postCode = document.getElementById('postCode').value;
            const vendorProdType = document.getElementById('vendorProdType').value;
            const vendorProdDescption = document.getElementById('vendorProdDescption').value;

            if(vendorName && vendorEmail && phone && address && postCode && vendorProdType && vendorProdDescption){
               
                let formData = {
                    vendorName : vendorName,
                    vendorEmail : vendorEmail,
                    phone : phone,
                    address: address,
                    postCode : postCode,
                    vendorProdType : vendorProdType,
                    vendorProdDescption : vendorProdDescption,
                }
                dispatch(ADD_VENDOR(formData))
            }
        }
        setValidated(true);
    }
    const phoneInputRef = useRef(null);
 
    useEffect(() => {
      const phoneInputField = phoneInputRef.current;
      if (phoneInputField) {
        const phoneInput = window.intlTelInput(phoneInputField, {
          preferredCountries: ['us', 'co', 'in', 'de'],
          utilsScript:
            'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        });
      }
      return () => {
        // You can perform cleanup here if needed
      };
    }, []);

    return(
        <>
        
        <Container>
        <div>
                <h2 className='ProdHeadTitle fw-bolder'>ADD VENDOR</h2>
            </div>
            <Row className="justify-content-md-center" data-aos="fade-up" >
                <Col xs lg={1}></Col>
                <Col md="auto" style={{width:'840px' }}>

                
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
               
                </Row>
                <Row className="mb-3">

                        <Form.Group as={Col} md="4">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required className="shadow" type="text" id='vendorName' placeholder="Enter the Name" />
                           
                            <Form.Control.Feedback className="shadow" type="invalid">Invalid Name</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required className="shadow" type="email" id='vendorEmail' placeholder="Enter the Email Address" />
                            <Form.Control.Feedback type="invalid">Invalid Email</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Website URL</Form.Label>
                            <Form.Control required className="shadow" type="url" id='websiteUrl' placeholder="www.example.com" />
                            <Form.Control.Feedback type="invalid">Invalid url</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                </Row>
                <Row className="mb-3">
                        <style>
                                {`
                                #iti-0__country-listbox {
                                    width: 240px;
                                }
                                `}
                        </style>
                        <Form.Group as={Col} md="4" className="my-xl-0 my-2">
                            <Form.Label className="d-block">Phone</Form.Label>
                            <Form.Control required className="shadow " type="tel" id="phone" ref={phoneInputRef}  />
                            <Form.Control.Feedback type="invalid">Invalid Email</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required className="shadow" type="text" id='address' placeholder="60/2 Example address" />
                            <Form.Control.Feedback type="invalid">Invalid Address</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control required className="shadow" type="text" id='postCode' placeholder="Eg: 607802"/>
                            <Form.Control.Feedback type="invalid">Invalid Address</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                       
                </Row>
                <Row className="mb-3">
             
                        <Form.Group as={Col} md="4" className="mt-xl-4 mt-2">
                            <Form.Label>Product / Service Type</Form.Label>
                            <Form.Control required className="shadow" type="text" id='vendorProdType' />
                            <Form.Control.Feedback type="invalid">Invalid Product/Service Type</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="8">
                                <Form.Label>Description</Form.Label>
                                    <Form.Control required className="shadow" as="textarea" id='vendorProdDescption' pattern=".{8,}" style={{ height: '100px' }} defaultValue="" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid description.
                                </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        
                       
                </Row>
                
                <div className="text-center d-flex align-items-center justify-content-center mt-4 mb-5">
                    <div className="d-inline-block forZoom  me-3"><Link to="/vendors" className="h1"><i className="text-secondary fa-solid fa-circle-arrow-left "></i> </Link></div>
                    <div className="d-inline-block forZoom"><Button type="submit" className='rounded-pill px-4' variant="primary">Submit</Button></div>
                </div>
                
                </Form>
                </Col>
                <Col xs lg={1}></Col>
            </Row>
            
        </Container>
        </>
    )
}