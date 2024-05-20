import { useSelector } from 'react-redux';

import { useEffect ,useState } from "react";

import axios from "axios";
export function Dashboard(){
     const [dashBoardCount , setdashBoardCount] = useState([
          {
               productCount:0,
               userCount:0
          }
     ]); 
    
     console.log("dashBoardCount : ",dashBoardCount);
     useEffect(() => {
          const token = localStorage.getItem('isAuth')

          console.log("First useEffect Dashboad load");
          axios.get("http://localhost:3001",{
               headers:{
                 'authorization': token
               }
             }
          )
            .then(function (response) {
                 if(response.data.status==0){
                      localStorage.setItem('isAuth', '')
                      window.location.href = '/'
                 }
              setdashBoardCount(response.data.dashBoardData);
              console.log("DashBoard data from DB: ",response.data.dashBoardData);
            })
            .catch(function (error) {
              console.log("this is error");
            });
        }, []);
    return(
        <>
       <div className="ms-xl-3 ms-5 mt-3 ps-4">
           <div className="box shadow" data-aos="fade-left">
                <strong className="h2">Products</strong>
                <i className="fa-solid fa-object-ungroup h3 ms-4"></i>
                <strong className="h1 d-block">{dashBoardCount[0].productCount}</strong>
           </div>
           <div className="box shadow" data-aos="fade-left" data-aos-duration="1200">
                <strong className="h2 me-4">Users</strong>
                <i className="fa-solid fa-users  h3 ms-5"></i>
                <strong className="h1 d-block">{dashBoardCount[0].userCount}</strong>
           </div>
           <div className="box shadow" data-aos="fade-left" data-aos-duration="1500">
                <strong className="h2 me-3">Orders</strong>
                <i className="fa-solid fa-cart-shopping  h3 ms-5"></i>
                <strong className="h1 d-block">3</strong>
           </div>
           <div className="box shadow" data-aos="fade-left" data-aos-duration="1800">
                <strong className="h2 me-5">Vendors</strong>
                <i className="fa-solid fa-universal-access  h3 ms-2"></i>
                <strong className="h1 d-block">4</strong>
           </div>
           <div className="box shadow" data-aos="fade-left" data-aos-duration="2000">
                <strong className="h2 me-5">FAQ</strong>
                <i className="fa-solid fa-clipboard-question h3 ms-5"></i>
                <strong className="h1 d-block">7</strong>
           </div>
       </div>
        </>
    )
}