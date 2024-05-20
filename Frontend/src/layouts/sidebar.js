import { Link } from 'react-router-dom'
import BK_Logo from './BK_Logo.jpg'
export function Sidebar(){
    return (
        <>
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light d-flex align-items-center justify-content-center" > <img className='Bk_Logo rounded-circle shadow'  src={BK_Logo}/> <strong className="d-inline-block h4 fw-bold">Admin Panel</strong> </div>
                <div className="list-group list-group-flush overflow-hidden">
                    
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/" > Dashboard</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/products" >Products</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/users"  >Users</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/vendors"  >Vendors</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders" >Orders</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/faqs" >FAQs</Link>
         
                </div>
            </div>
            

        </>
    )
}