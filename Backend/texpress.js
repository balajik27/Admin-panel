const express = require('express') //import express framework
const app = express() //create object or instance for express , app is the main thing for route , middleware and others
const port = 3001
const jwt = require('jsonwebtoken');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors') //cross origin resourse sharing
app.use(cors()) 
app.use(express.static('uploads'))

const PRODUCT = require('./controllers/product')
const USER = require('./controllers/user')
const VENDOR = require('./controllers/vendor')
const ADMIN = require('./controllers/superUser')

app.use('/products' , PRODUCT)
app.use('/users' , USER)
app.use('/vendors' , VENDOR)
app.use('/admin' , ADMIN)
  
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/AdminPanel')
  .then(() => console.log('Connected!'))
  

// async function add(){
//   const db = await mongoose.connect('mongodb://127.0.0.1:27017/AdminPanel');
//   if(db){
//     console.log('Connected!')
//   }
// };
// add();


const UserModal = require('./schema/user')
const ProductModel = require('./schema/product')
app.get('/', async (req, res) => {
  try{
    var token = req.headers.authorization;
    var decoded = jwt.verify(token, 'balajiFullstack');

    const productCount = await ProductModel.countDocuments();
    const userCount = await UserModal.countDocuments();

    let userDate = [
      {
        id:1,
        name:'Balaji',
        age:20,
      },
      {
        id:2,
        name:'Kowsalya',
        age:23,
      },
      {
        id:3,
        name:'Vennila',
        age:47,
      },
  ]
  let dashBoardData = [
    {
      productCount:productCount,
      userCount: userCount
    }
  ]
    res.send({status:1 , dashBoardData : dashBoardData})
 }  catch(err){
    res.send({status:0 , message:"You are not Authorized user" , token : decoded});
  }

})

app.post('/validate' , (req,res)=>{
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
                    console.log(req.body)
                    res.send({
                      message:'Registered Successfully',
                      status:1
                    })
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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})