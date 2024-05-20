const express = require('express')
const router = express.Router()
const UserModal = require('../schema/user')
const jwt = require('jsonwebtoken');
router.get('/' , async (req,res)=>{
    var token = req.headers.authorization;

    try{
      var decoded = jwt.verify(token, 'balajiFullstack');
      let userData= await UserModal.find();
      res.send({message:"Welcome to User page" , userData : userData , token : decoded});
    } catch(err){
      res.send({message:"You are not Authorized user" , userData : '', token : decoded});
    }

})
router.post('/addUser', async (req, res) => {

  try{

    console.log("helooooo")
    var token = req.headers.authorization;
    var decoded = jwt.verify(token, 'balajiFullstack');

    console.log("hello d" + decoded)
    console.log("hello t" + token)
  


    const User = UserModal();

    console.log("req.body = " + req.body)
    
    let fname = req.body.firstName;
    let lname = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
  
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if(fname){
      if(fname.length>2){
        if(lname){
          if(email){
            if(email.match(pattern)){
              if(password){
                if (password.match(passwordPattern)) {
                  if(confirmPassword){
                    if(password === confirmPassword){

                        User.firstName = fname;
                        User.lastName = lname;
                        User.email = email;
                        User.password = password;

                        let userStatus = await User.save();

                        if(!userStatus){
                            res.send({status:0 , message : "error in db"})
                        }
                        else{
                            res.send({status:1, message : "Registered Successfully"})
                        }
                      console.log(req.body)
                    }
                    else{
                      res.send({
                        message:'Password mismatch',
                        status:0
                      })
                    }
                  }
                  else{
                    res.send({
                      message:'ConfirmPassword cannot be empty',
                      status:0
                    })
                  }
                }
                else{
                  res.send({
                    message:"Password Invalid format",
                    status:0
                  })
                }
              }
              else{
                res.send({
                  message:"Password cannot be empty",
                  status:0
                })
              }
              
            }
            else{
              res.send({
                message:"Email Invalid",
                status:0
              })
            }
          }
          else{
            res.send({
              message:"Email name cannot be empty",
              status:0
            })
          }
        }
        else{
          res.send({
            message:"LastName cannot be empty",
            status:0
          })
        }
      }
      else{
        res.send({
          message:"FirstName should have more than 2 letters",
          status:0
        })
      }
    }
    else{
      res.send({
        message:"FirstName name cannot be empty ",
        status:0
      })
    }
  } catch(err){
    res.send({status:0 , message:"You are not Authorized user , sorry" , token : decoded});
  }

  })
router.post('/updateUser' , (req,res)=>{
    res.send("Updating the user")
})
router.delete('/deleteUser/:userId' , async(req,res) => {
  try {
    const deleteUser = await UserModal.findByIdAndDelete(req.params.userId);
    console.log("deleteUser = " , deleteUser);

    // Send response indicating success
    res.send({
      message: "User deleted successfully ",
      status: 1
    });
  } catch(err) {
    // Send response indicating failure
    res.status(500).send({
      message: "User not deleted successfully ",
      status: 0
    });
  }
});

router.get('/listUsers' , (req,res)=>{
    res.send("Listing the users")
})

module.exports = router