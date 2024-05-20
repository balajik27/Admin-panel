import UserTable from "./table"
import { Link } from 'react-router-dom'

export function User(){
   
    return(
        <>
        <div className="mainProdSection"  data-aos="fade-zoom-in">
        <div className="text-center text-xl-end mt-3 mb-3 me-xl-5 pe-xl-5">
                <Link className="addProductBtn btn btn-success  px-4 me-xl-5" to="/addusers" >Add User </Link>
                </div>
                <h2 className="fw-bolder" style={{textAlign:'center'}}>Users</h2>
                <div className="prodTableStyle" >
                    
                <UserTable />
                </div>
            </div>
       
        </>
    )
}