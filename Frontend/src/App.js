import { Sidebar } from "./layouts/sidebar";
import { Header } from "./layouts/header";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Dashboard } from "./dashboard/index"
import { Product } from './product/index'
import { User } from './user/index'
import { AddUser } from "./user/addUsers";
import AddUser_New from "./user/addUser";
import { Order } from './order'
import { Vendor } from './vendor'
import { AddVendor } from './vendor/addVendors'
import { FAQ } from './faq'
import { AddProduct } from "./product/addProducts";
import { SignUp } from "./signup";
import { SignIn } from "./signup/login";
function App() {
 
  // const isAuth = localStorage.getItem('isAuth') === 'true';
  const isAuth = localStorage.getItem('isAuth');

  console.log("Authentication : ",isAuth);
  return (
    <>
        <Router>
          {!isAuth?
            <Routes>  
                <Route path="/" element={<SignIn />} />
                <Route path="/Signup" element={<SignUp />} />
            </Routes>
          :
            <div className="d-flex" id="wrapper">
              <Sidebar />
              
              <div id="page-content-wrapper">
                <Header />
                <Routes> 
                        <Route path="/" element={<Dashboard />} />

                        <Route path="/products" element={<Product />} />
                        <Route path="/addProdutcs" element={<AddProduct />} />
                        
                        <Route path="/users" element={<User />} />
                        {/* <Route path="/addusers" element={<AddUser />} /> */}
                        <Route path="/addusers" element={<AddUser_New />} />

                        <Route path="/vendors" element={<Vendor />} />
                        <Route path="/addvendors" element={<AddVendor />} />

                        <Route path="/orders" element={<Order />} />
                        <Route path="/faqs" element={<FAQ />} />
                </Routes>
              </div>  
            </div>
          }
      </Router>
     
  
    </>
  );
}

export default App;
