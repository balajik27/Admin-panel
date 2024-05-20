const express = require('express')
const router = express.Router()

router.get('/' , (req,res)=>{
    res.send("Welcome to Vendor page")
})
router.post('/addVendor', (req, res) => {
    res.send('Adding the vendors')
  })
  router.post('/updateVendor' , (req,res)=>{
    res.send("Updating the vendors")
})
  router.delete('/deleteVendor' , (req,res)=>{
    res.send("Deleting the vendor")
})

router.get('/listVendors' , (req,res)=>{
    res.send("Listing the vendors")
})

module.exports = router