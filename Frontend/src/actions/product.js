import axios from 'axios'
import swal from 'sweetalert';
// font-family: Google Sans,Helvetica Neue,sans-serif;
export const ADD_PRODUCT =(formData) =>{
    console.log("this is product action" , formData);
    const token = localStorage.getItem('isAuth')
    console.log("Add Product Action - is auth -------------", token)
    return(dispatch) =>{
        axios.post("http://localhost:3001/products/addProduct",formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': token
              }
        })
            .then(function (response) {
                console.log(response.data);
                dispatch({type:'ADDPRODUCT' , payload:response})
                if(response.data.status){
                    swal("Product Added", "Product and its details added successfully!", "success")
                    .then(() => {
                        window.location.href = "http://localhost:3000/products";
                      });
                }
                dispatch({type:'ADDPRODUCT' , payload:response})
            })
            .catch(function (error) {
                console.log("this is Producterror");
            });
    }
}

export const EDIT_PRODUCT = (formData , productId ) =>{
    const token = localStorage.getItem('isAuth')
    return async ()=>{
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
              // setProducts(products.filter(product => product._id !== productId));
            }
            else {
              swal("Product not Edited", "Product not Edited successfully!", "danger")
            }
            
          } catch (error) {
              console.error('Error editing product:', error);
          }
    }
}

// export const ProdCount = (length)=>{
//     console.log("Product Length in action: ", length);
//     return{
//         type:"PRODUCT_COUNT",
//         payload : length
//     }
// }
