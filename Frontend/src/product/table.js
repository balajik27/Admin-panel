import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';

import { useEffect ,useState } from "react";
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { EDIT_PRODUCT } from '../actions/product';
// import { ProdCount } from '../actions/product';
import axios from "axios";
function ProdTable() {
  console.log("----------------------------------");
  const [products , setProducts] = useState([])
  const [editproduct , setEditProduct] = useState([]);

  const dispatch = useDispatch();
  console.log("products in State = ",products);
  useEffect(() => {
    console.log("First useEffect product load");
    const token = localStorage.getItem('isAuth')
    console.log("Product page - is auth -------------", token)

    axios.get("http://localhost:3001/products",{
      headers:{
        'authorization': token
      }
    })
      .then(function (response) {
        if(response.data.status==0){
            localStorage.setItem('isAuth', '')
            window.location.href = '/'
        }
        setProducts(response.data.productData);
        console.log("Message : ", response.data.message) 
        console.log("Products data from DB: ",response.data.productData);
      })
      .catch(function (error) {
        console.log("this is error");
      });
  }, []); 

  const handleDelete = async (productId , prodTitle) => {
    try {

      swal({
        title: `Delete ${prodTitle}`,
        text: `Are you sure you want to Delete ${prodTitle}?`,
        icon: "warning",
        buttons: ["No", "Yes"],
        dangerMode: true,
      })
      .then(async (Delete)=>{
        if(Delete){
          const response = await axios.delete(`http://localhost:3001/products/deleteProduct/${productId}`); // assuming your delete endpoint is '/api/products/:id'
      
          //if successsfully deleted then response.data.status is 1
          if(response.data.status){
            setProducts(products.filter(product => product._id !== productId));
            swal("Product Deleted", `${prodTitle} Product deleted successfully!`, "success")
          }
          else {
            swal("Product not Deleted", "Product not deleted successfully!", "danger")
          }
        }
       
      })
     
      
    } catch (error) {
        console.error('Error deleting product:', error);
    }
  };

  const handleEdit = async (productId , formData) => {
    const token = localStorage.getItem('isAuth')

    try {
      const response = await axios.put(`http://localhost:3001/products/editProduct/${productId}` , formData ,{
        headers: {
            'Content-Type': 'multipart/form-data',  
            'authorization': token
          }
    }); // assuming your delete endpoint is '/api/products/:id'
      
      //if successsfully deleted then response.data.status is 1
      if(response.data.status){
        // setProducts(response.data.product);
        swal("Product Edited", "Product edited successfully!", "success")
        .then(()=>{
          const editProductResponse = response.data.product;

          const index = products.findIndex(product => product._id === editproduct[0]._id);

              // editproduct[0].Title = Title;
              // editproduct[0].Category = Category;
              // editproduct[0].Description = Description;
              // editproduct[0].Image = Image;

              // console.log("prodImage name = ", Image);
              
              console.log("index = " , index)
              console.log("editproduct[0] = " , editproduct[0])
              console.log("editProductResponse = " , editProductResponse)
              // If the old product is found, update it with the editproduct data
              if (index !== -1) {
                const updatedProducts = [...products]; // Create a copy of the products array
                // updatedProducts[index] = editproduct[0]; // Replace the old product with the editproduct data
                updatedProducts[index] = editProductResponse; // Replace the old product with the editproduct data

                console.log("updatedProducts = ", updatedProducts)
                // Update the products state with the updated data 
                setProducts(updatedProducts);
                handleClose();

                // Clear the editproduct state
                setEditProduct([]);
              }

        })
        // setProducts(products.filter(product => product._id !== productId));

        
      }
      else {
        swal("Product not Edited", "Product not Edited successfully!", "danger")
      }
      
    } catch (error) {
        console.error('Error editing product:', error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
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

        console.log("prodImage = " ,prodImage);

        if(prodTitle && prodCategory && prodQty && prodDescription && prodPrice && prodImage){
           
            let formData = {
                Title : prodTitle,
                Category : prodCategory,
                Qty : prodQty,
                Description : prodDescription,
                Price : prodPrice,
                Image : prodImage,  
            }

            console.log("formData = " ,formData);

            setValidated(true);
            handleEdit(editproduct[0]._id ,formData);


            // dispatch(EDIT_PRODUCT(formData , editproduct[0]._id))
        }
    }
    setValidated(true);  
  };

  
  const [prodQty , setprodQty] = useState('');
  const [prodPrice , setprodPrice] = useState('');

  const moreThanZero = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    
    if (id === 'prodQty' || id === 'prodPrice') {
      if (value <= 0) {
        // If the value is negative, set it to an empty string
        if (id === 'prodQty') {
          setprodQty('');
        } else if (id === 'prodPrice') {
          setprodPrice('');
        }
      } else {
        // If the value is non-negative, set the corresponding state
        if (id === 'prodQty') {
          setprodQty(value);
        } else if (id === 'prodPrice') {
          setprodPrice(value);
        }
      }
    }
  };


  console.log("editproduct = ",editproduct);
  const fetchData = async(productId) => {
    try{
      const prod = products.filter((x)=>{
        return x._id == productId;
      })
      
      console.log("prod = " ,prod);
      handleShow();

      setprodQty(prod[0].Qty);
      setprodPrice(prod[0].Price);

      setEditProduct(prod);

    } catch (err){

    }
  };

  // const editData = async (fetchData)
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

         
        <Modal.Body>
          
        <Row className="mb-3">
                <Form.Group as={Col} md="4" >
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control
                        id="prodTitle" className="shadow"
                        required
                        type="text"
                        placeholder="First name"
                        pattern=".{3,}"
                        defaultValue={editproduct.length > 0 ? editproduct[0].Title : ""}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid title.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                <Form.Label>Product Category</Form.Label>
                    <Form.Control as="select" required  className="shadow" id="prodCategory" defaultValue={editproduct.length > 0 ? editproduct[0].Category : ""}>
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
                            <Form.Control required className="shadow" id='prodDescription' as="textarea" pattern=".{8,}" style={{ height: '100px' }}  defaultValue={editproduct.length > 0 ? editproduct[0].Description : ""} />
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




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">Update</Button>
        </Modal.Footer>
 
        </Form>
      </Modal>

    {products.length!=0? 
    <Table className='MainTable' striped bordered hover variant="light">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Title</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Image</th>
          <th>Price</th>
          <th>Actions</th>
          
        </tr>
      </thead>
      <tbody>
      {products.map((product, index) => (
        <tr  key={product._id}>
          <td>{index + 1}</td>
          <td>{product.Title}</td>
          <td>{product.Category}</td>
          <td>{product.Qty}</td>
          <td><img src={'http://localhost:3001/' + product.Image} alt="product Image" className="product_image_size_small" /></td>
          <td>{product.Price}</td>
          <td><img onClick={() => handleDelete(product._id , product.Title)} src="assets/img/delete.png" className='deleteIcon cursorPointer' /><img src="assets/img/edit.png" onClick={()=>fetchData(product._id)} className='editIcon cursorPointer' /></td>
        </tr>
        ))}  
      </tbody>
    </Table>
    : 
    <h3  className="text-center">No Products</h3>
   }
   </div>
  );
}

export default ProdTable;