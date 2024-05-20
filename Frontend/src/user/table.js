import Table from 'react-bootstrap/Table';
import { useEffect ,useState } from "react";
import { useDispatch } from 'react-redux';

// import { UserCount } from '../actions/user';

import axios from "axios";
import swal from 'sweetalert';
function UserTable() {
  console.log("----------------------------------");

    const [users , setUsers] = useState([])
    // const dispatch = useDispatch();
    console.log("users in state = ",users);
    useEffect(() => {
      console.log("first useEffect user load");
      const token = localStorage.getItem('isAuth')
      console.log("User page - is auth -------------", token)

      axios.get("http://localhost:3001/users",{
        headers:{
          'authorization': token
        }
      })
        .then(function (response) {
          if(response.data.status==0){
              localStorage.setItem('isAuth', '')
              window.location.href = '/'
          }
          // dispatch(UserCount((response.data.userData).length))
          // console.log("length = ",(response.data.userData).length);
          console.log("Message : ", response.data.message)
          setUsers(response.data.userData);
          console.log(response.data.userData);
        })
        .catch(function (error) {
          console.log("this is error");
        });
  
    }, []); 


    const handleDelete = async (userId , userName)=>{
      const token = localStorage.getItem('isAuth')
      swal({
        title: `Delete ${userName}`,
        text: `Are you sure you want to Delete ${userName}?`,
        icon: "warning",
        buttons: ["No", "Yes"],
        dangerMode: true,
      }).then(async(Delete)=>{
        if(Delete){
          try{
            const deleteProd = await axios.delete(`http://localhost:3001/users/deleteUser/${userId}` ,{
              headers: {
                  'authorization': token
                }
          });
    
            if(deleteProd.data.status){
              setUsers(users.filter((user)=> userId !== user._id));
              swal("User Deleted !" , `User ${userName} deleted Successfully !` , "success")
            } else {
              swal("User not Deleted", "User not deleted successfully!", "danger")
            }
          } catch(err){
    
          }
        }
        
      })
     
    }
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
    {users.length!=0? 
      <Table className='MainTable' striped bordered hover variant="light">
          <thead>
            <tr>
              <th>S.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>

            </tr>
          </thead>
        
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName }</td>
                  <td>{user.email}</td>
                  <td><img onClick={() => handleDelete(user._id , user.firstName)} src="assets/img/delete.png" className='deleteIcon cursorPointer' /></td>
                </tr>
              ))}  
          </tbody>
      </Table>
      : 
       <h3  className="text-center">No Users</h3>
      }
      </div>
  );
}

export default UserTable;