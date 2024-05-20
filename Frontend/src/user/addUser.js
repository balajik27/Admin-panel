import { useState } from "react"


export default function AddUser_New() {

    const [firstName , setfirstName] = useState('');
    const [lastName , setlastName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setconfirmPassword] = useState('');

    const [firstNameError , setfirstNameError] = useState(false);
    const [lastNameError , setlastNameError] = useState(false);
    const [emailError , setemailError] = useState(false);
    const [passwordError , setPasswordError] = useState(false);
    const [passwordErrorValue , setpasswordErrorValue] = useState('');

    const [confirmPasswordError , setconfirmPasswordError] = useState(false);
    const [confirmPasswordErrorValue , setconfirmPasswordErrorValue] = useState('');




    const handleInput = (event)=>{

        const id = event.target.id;
        const value = event.target.value.trim();
        let validEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if(id === 'firstName'){
            if(value.length < 3){
                setfirstNameError(true);
            } else {
                setfirstNameError(false);
            }
        } else if(id === 'lastName'){
            if(value.length < 1){
                setlastNameError(true);
            } else {
                setlastNameError(false);
            }
        } else if(id === 'email'){
            console.log("value.match(validEmail) = " ,value.match(validEmail));
            if(!value.match(validEmail)){
                setemailError(true);
            } else {
                setemailError(false);
            }
        }
        const caps_letter = /[A-Z]/;
        const small_letter = /[a-z]/;
        const symbol = /[^\w\s]/;
        const number = /\d/;


        if(id === 'password'){
                if(password.match(caps_letter)){
                    if(password.match(small_letter)){
                        if(password.match(symbol)){
                            if(password.match(number)){
                                if(password.trim().length>7){
                                    if(password === confirmPassword){
                                        setPasswordError(false);
                                        setconfirmPasswordError(false);
                                    } else {
                                        setPasswordError(true);
                                        setpasswordErrorValue("*password and confirm password not equal");
                                    }
                                } else {
                                    setPasswordError(true);
                                    setpasswordErrorValue("*must have atleast 8 characters")
                                }
                            } else {
                                setPasswordError(true);
                                setpasswordErrorValue("*must have atleast single NUMBER")
                            }
                        } else {
                            setPasswordError(true);
                            setpasswordErrorValue("*must have atleast single SYMBOL")
                        }
                    } else {
                        setPasswordError(true);
                        setpasswordErrorValue("*must have atleast single SMALL LETTER")
                    }
                } else {
                    setPasswordError(true);
                    setpasswordErrorValue("*must have atleast single CAPs LETTER")
                }
            } 
        

        if(id === 'confirmPassword'){
                if(confirmPassword.match(caps_letter)){
                    if(confirmPassword.match(small_letter)){
                        if(confirmPassword.match(symbol)){
                            if(confirmPassword.match(number)){
                                if(confirmPassword.trim().length>7){
                                    if(password === confirmPassword){
                                        setPasswordError(false);
                                        setconfirmPasswordError(false);
                                    } else {
                                        setconfirmPasswordError(true);
                                        setconfirmPasswordErrorValue("*password and confirm password not equal");
                                    }
                                } else {
                                    setconfirmPasswordError(true);
                                    setconfirmPasswordErrorValue("*must have atleast 8 characters")
                                }
                            } else {
                                setconfirmPasswordError(true);
                                setconfirmPasswordErrorValue("*must have atleast single NUMBER")
                            }
                        } else {
                            setconfirmPasswordError(true);
                            setconfirmPasswordErrorValue("*must have atleast single SYMBOL")
                        }
                    } else {
                        setconfirmPasswordError(true);
                        setconfirmPasswordErrorValue("*must have atleast single SMALL LETTER")
                    }
                } else {
                    setconfirmPasswordError(true);
                    setconfirmPasswordErrorValue("*must have atleast single CAPs LETTER")
                }
            } 

        
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError){
            
        }
    }
    

    return (
        <div>
            <div>
                <h2 className='ProdHeadTitle fw-bolder'>ADD USER</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-0"></div>
                    <div className="col-md-6 col-12">
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>First name : </label>
                                            <input type="text" placeholder="Enter the First Name" id="firstName" onChange={handleInput} className="form-control" />
                                            {firstNameError && <span className="text-danger">*must have more than 2 characters</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Last name :</label>
                                            <input type="text" placeholder="Enter the Last Name" id="lastName" onChange={handleInput} className="form-control" />
                                            {lastNameError && <span className="text-danger">*must have atleast single characters</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Email :</label>
                                            <input type="email" placeholder="Enter the Email" id="email" onChange={handleInput} className="form-control" />
                                            {emailError && <span className="text-danger">*invalid email format</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Password :</label>
                                            <input type="password" placeholder="Enter the Password" id="password" onChange={handleInput} className="form-control" />
                                            {passwordError && <span className="text-danger">{passwordErrorValue}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Confirm password :</label>
                                            <input type="password" placeholder="Enter the Confirm Password" onChange={handleInput} id="confirmPassword" className="form-control" />
                                            {confirmPasswordError && <span className="text-danger">{confirmPasswordErrorValue}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button className="addProductBtn btn btn-success  px-4 me-xl-5 " onClick={handleSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-3 col-0"></div>
                </div>
            </div>
        </div>
    )
}