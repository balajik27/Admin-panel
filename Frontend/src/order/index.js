import OrderTable from "./table"

import { Link } from 'react-router-dom'


export function Order() {
    return (
        <>
            <div className="mainProdSection mt-4" data-aos="fade-zoom-in"> 
                {/* <Link className="addProductBtn btn btn-primary" to="/addProdutcs" >Add Products </Link> */}
                <h2 className="fw-bolder" style={{textAlign:'center'}}>Orders</h2>
                <div className="prodTableStyle" >
                    
                    <OrderTable />
                </div>
            </div>
            
        </>
    )
}