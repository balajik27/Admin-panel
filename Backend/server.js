const express = require('express');
const app = express();
const port = 3001;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors') //cross origin resourse sharing
app.use(cors()) 

const userModal = require('./schema/sampleUser');

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/AdminPanel')
  .then(() => console.log('Connected!'))

app.post('/' , async (req , res) => {
    try {

        console.log("req body = " , req.body)
        let username = req.body.userName;
        let password = req.body.password;

        let userForm = new userModal(); // Assuming userModal is a Mongoose model

        userForm.Name = username;
        userForm.Password = password;

        let result = await userForm.save();

        res.send({
            status: 1,
            message: "Stored successfully"
        });
    } catch(err) {
        console.error(err);
        res.status(500).send({
            status: 0,
            message: "Database error: could not save user"
        });
    }
});


app.listen(()=>{
    console.log("port = " , port)
})