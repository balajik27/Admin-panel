
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {useDispatch} from 'react-redux'
import { ADD_PRODUCT } from '../actions/product';
import { Link } from 'react-router-dom'

export function AddProduct() {
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
        event.preventDefault();
        const prodTitle = document.getElementById('prodTitle').value;
        const prodCategory = document.getElementById('prodCategory').value;
        const prodQty = document.getElementById('prodQty').value;
        const prodDescription = document.getElementById('prodDescription').value;
        const prodPrice = document.getElementById('prodPrice').value;
        const prodImage = document.getElementById('prodImage').files[0];

        if(prodTitle && prodCategory && prodQty && prodDescription && prodPrice && prodImage){
           
            let formData = {
                productTitle : prodTitle,
                productCategory : prodCategory,
                productQuantity : prodQty,
                prodDescription : prodDescription,
                prodPrice : prodPrice,
                prodImage : prodImage,  
            }
            dispatch(ADD_PRODUCT(formData))
        }
    }
    setValidated(true);
  };

  const [prodQty , setprodQty] = useState('');
  const [prodPrice , setprodPrice] = useState('');

  const moreThanZero = (event)=>{
      let id = event.target.id;
      let value = event.target.value;
      if(id==='prodQty'){
        if(value<=0){
            setprodQty('')
        }
        else{
            setprodQty(value)
        }
      }
      if(id==='prodPrice'){
        if(value<=0){
            setprodPrice('')
        }
        else{
            setprodPrice(value)
        }
      }
  }

  return (
    <Container>

        {/* This row is for heading */}
        <Row className="justify-content-md-center">
        <Col xs lg="2">
        </Col>
        <Col md="auto">
            <div>
                <h2 className='ProdHeadTitle fw-bolder'>ADD PRODUCT</h2>
            </div>
        </Col>
        <Col xs lg="2"></Col>
        </Row>  

        {/* This row is whole form content */}
        <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto" style={{width: '650px'}} data-aos="fade-up">
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
            <div className='innerDivForInput'  >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className="mb-3">
                <Form.Group as={Col} md="4" >
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control
                        id="prodTitle" className="shadow"
                        required
                        type="text"
                        placeholder="First name"
                        pattern=".{3,}"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid title.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                <Form.Label>Product Category</Form.Label>
                    <Form.Control as="select" required  className="shadow" id="prodCategory">
                        <option value="" className='text-muted'>Select Category </option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Unisex">Unisex</option>
                        {/* Add more options as needed */}
                    </Form.Control>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid category.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                <Form.Label>Quantity</Form.Label>
                <Form.Control className="shadow"
                    required
                    id="prodQty"
                    onChange={moreThanZero}
                    value={prodQty}
                    type="number"
                    placeholder="Product Quantity"
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid quantity.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="12">
                        <Form.Label>Description</Form.Label>
                            <Form.Control required className="shadow" id='prodDescription' as="textarea" pattern=".{8,}" style={{ height: '100px' }} defaultValue="" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid description.
                        </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" className="shadow" placeholder="Product Price" id='prodPrice' value={prodPrice} onChange={moreThanZero} required  />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid price.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" accept="image/*" id='prodImage' className="shadow" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid image.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3">
            </Form.Group>
            {/* <div className='mb-5 text-center mt-5'>
                <Button type="submit" className='rounded-pill px-4' >Submit</Button>
            </div> */}
                <div className="text-center d-flex align-items-center justify-content-center mt-4 mb-5">
                    <div className="d-inline-block forZoom me-3"><Link to="/products" className="h1"><i className="text-secondary fa-solid fa-circle-arrow-left "></i> </Link></div>
                    <div className="d-inline-block forZoom"><Button type="submit" className='addProductBtn px-4' variant="primary">Submit</Button></div>
                </div>  
            </Form>
            </div>
        </Col>
        <Col xs lg="2"></Col>
        </Row>
   
  </Container>
  );
}
