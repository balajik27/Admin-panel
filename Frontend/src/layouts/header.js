import { useState } from "react";
import swal from 'sweetalert';

export function Header() {

    const [iconChange , seticonChange] = useState(false);
    const iconChangeForSlider = () =>{
        if(iconChange){
            seticonChange(false);
        }else{
            seticonChange(true);

        }
    }

    const sideBarHideShow = (event)=>{
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            // Uncomment Below to persist sidebar toggle between refreshes
            // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            //     document.body.classList.toggle('sb-sidenav-toggled');
            // }
            // sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
               
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            // });
        }
    }

    const logoutSwal=()=>{
        swal({
            title: "Logout",
            text: "Are you sure you want to logout?",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true,
          })
          .then((willLogout) => {
            if (willLogout) {
              localStorage.setItem('isAuth','')
              window.location.href="/"
            } else {
            }
          });
    }

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom ">
                <div className="container-fluid">
                    <span style={{cursor:'pointer' , fontSize:'27px'}} id="sidebarToggle" onClick={sideBarHideShow}>{iconChange?  <i onClick={iconChangeForSlider} className="fa-solid fa-circle-arrow-right"></i> : <i onClick={iconChangeForSlider} className="fa-solid fa-circle-arrow-left"></i>   }</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" style={{height:'76px'}} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0 me-5 d-flex align-items-center">
                            <li className="nav-item mx-2 active"><a className="nav-link font-large" href="#!">Home </a></li>
                            <li className="nav-item mx-2"><a className="nav-link font-large" href="#!">Profile</a></li>
                            <li className="nav-item mx-2"><a className="nav-link font-large" href="#!">Reports</a></li>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link dropdown-toggle font-large" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item mx-2"><a className="nav-link font-large" href="#!">Balaji K <i className="fa-regular fa-user"></i></a></li>
                            <li className="nav-item mx-2"><a className="nav-link font-large" onClick={logoutSwal} href="#!">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}