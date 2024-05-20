import axios from 'axios'
import swal from 'sweetalert';
export const ADD_USER =(formData) =>{

    console.log("this is user action" , formData);
    const token = localStorage.getItem('isAuth')
    console.log("Add User Action - is auth -------------", token)
    return(dispatch) =>{
        axios.post("http://localhost:3001/users/addUser", formData , {
            headers: {
                'authorization': token
              }
        })
        .then(function (response) {
            console.log(response.data);
            dispatch({type:'ADDUSER' , payload:response})
            if(response.data.status){
                swal("Registered", "User details Registered Successfully!", "success")
                .then(() => {
                    window.location.href = "http://localhost:3000/users";
                    });
            }
        })
        .catch(function (error) {
            console.log("this is Usererror");
        });
    }
}
// export const UserCount = (length)=>{
//     console.log("User Length in action: ", length);
//     return{
//         type:"USER_COUNT",
//         payload : length
//     }
// }
