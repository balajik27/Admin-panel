const express = require('express')
const router = express.Router()
const ProductModel = require('../schema/product')
const jwt = require('jsonwebtoken');

const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.png'); // Use a unique filename to prevent overwriting
  }
});

const upload = multer({ storage: storage })

router.get('/' , async (req,res)=>{

  var token = req.headers.authorization;

    try{
      var decoded = jwt.verify(token, 'balajiFullstack');
      let productData= await ProductModel.find();
      res.send({message:"Welcome to Product Page" , productData : productData , token : decoded});
     
    } catch(err){
      res.send({message:"You are not Authorized user" ,productData: '', token : decoded});
    }

})

// router.get('/', async (req, res) => {
//   var token = req.headers.authorization;

//   try {
//       var decoded = jwt.verify(token, 'balajiFullstack');
//       let productData = await ProductModel.find();

//       // Map product data to include image paths
//       const productsWithImages = productData.map(product => ({
//           _id: product._id,
//           title: product.title,
//           category: product.category,
//           quantity: product.quantity,
//           description: product.description,
//           image: product.image, // Assuming this field contains the image path
//           price: product.price
//       }));

//       res.send({
//           message: "Welcome to Product Page",
//           productData: productsWithImages,
//           token: decoded
//       });

//   } catch (err) {
//       res.send({
//           message: "You are not Authorized user",
//           productData: '',
//           token: decoded
//       });
//   }
// });


router.post('/addProduct' , upload.single('prodImage'), async (req,res)=>{

  try{
    var token = req.headers.authorization;
    var decoded = jwt.verify(token, 'balajiFullstack');

    const Product = ProductModel();
    console.log("Req body" , req.body)
    console.log("Req File" , req.file)

    let title = req.body.productTitle;
    console.log("check1")

    let category = req.body.productCategory;
    console.log("check2")

    let qty = req.body.productQuantity;
    console.log("check3")

    let description = req.body.prodDescription;
    console.log("check4")

    let image = req.file.filename;
    console.log("check5")

    let price = req.body.prodPrice;
    console.log("check6")

    console.log("Image path ------>",image)
    
    
    if(title){
        if(title.length>2){
            if(category){
                if(qty>0){
                    if(description){
                        if(description.length>3){
                            if(price>0){
                                
                                Product.Title = title;
                                Product.Category = category;
                                Product.Qty = qty;
                                Product.Description = description;
                                Product.Image = image;
                                Product.Price = price;
                                
                                let productStatus = await Product.save();
                                
                                if(!productStatus){
                                    res.send({status:0 , message : "error in db"})
                                }
                                else{
                                    res.send({status:1, message : "Product addedd Successfully"})
                                }
                                console.log(req.body)
                            }
                            else{
                                res.send({
                                    message:"Price cannont be zero or negative",
                                  status:0
                                })
                            }
                        }else{
                            res.send({
                                message:"Description should have more than 3 letters",
                              status:0
                            })
                          }
                    }
                    else{
                        res.send({
                            message:"Description cannot be empty",
                          status:0
                        })
                      }
                } else{
                    res.send({
                      message:"Quantity cannont be zero or negative",
                      status:0
                    })
                  }
            }else{
                res.send({
                  message:"Category cannot be empty",
                  status:0
                })
              }
        }else{
            res.send({
              message:"Title should have more than 2 letters",
              status:0
            })
          }
    }
    else{
      res.send({
        message:"Title name cannot be empty ",
        status:0
      })
    }
  } catch(err){
    res.send({status:0 ,message:"You are not Authorized user" ,token : decoded});
  }
})

router.delete('/deleteProduct/:productId', async (req, res) => {
  try {
      // const Product = ProductModel();
      await ProductModel.findByIdAndDelete(req.params.productId);
      res.send({
        message:"Product deleted successfully ",
        status:1
      });
     
  } catch (error) {
      console.error(error);
      res.send({
        message:"Internal server error ",
        status:0
      })
   
  }
});

router.get('/fetchData/:productId', async (req, res) => {
  try {
      const prodId = req.params.productId;
      const singleProduct = await ProductModel.findById(prodId);
      if (singleProduct) {
          res.send({
              message: "Product received Successfully",
              product: singleProduct,
              status: 1
          });
      } else {
          res.send({
              message: "Product error or not available",
              status: 0
          });
      }
  } catch (err) {
      console.error(err);
      res.send({
          message: "Product error or not available",
          status: 0
      });
  }
});


router.put('/editProduct/:productId',  upload.single('Image'), async (req, res) => {
  try {

      console.log("req.body = " , req.body);

      const productData = {
        Title: req.body.Title,
        Category: req.body.Category,
        Qty: req.body.Qty,
        Description: req.body.Description,
        Image: req.file.filename,
        Price: req.body.Price
    };

       // or req.body.Image = req.file.filename; , key value from the req.body should be same as schema, and give req.body inside findByIdAndUpdate

    console.log("productData = " , productData)
      

      const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.productId, productData, { new: true });

      console.log("updatedProduct = " ,updatedProduct);
      if (!updatedProduct) {
          return res.send({
              message: 'Product not found',
              status: 0
          });
      }
      res.send({
          message: 'Product updated successfully',
          status: 1,
          product: updatedProduct
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: 'Internal server error',
          status: 0
      });
  }
});

module.exports = router