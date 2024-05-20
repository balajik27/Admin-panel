import axios from 'axios'

export const ADD_VENDOR =(formData) =>{
    console.log("this is action" , formData);
    return(dispatch) =>{
        axios.post("https://dummyjson.com/products",formData)
            .then(function (response) {
                dispatch({type:'ADDVENDOR' , payload:response})
            })
            .catch(function (error) {
                console.log("this is error");
            });
    }
}
