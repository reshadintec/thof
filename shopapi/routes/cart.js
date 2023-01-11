const Cart = require("../models/Cart");
const { verifyToken, veriftyTokenAndAuthorization, veriftyTokenAndAdmin } = require("./veriftyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body)

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
})

//UPDATE
router.put("/:id", veriftyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE 

router.delete("/:id", veriftyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been successfully deleted")
  } catch (err) {
    res.status(500).json(err)
  }
});


//GET USER CART

router.get("/find/:id", veriftyTokenAndAuthorization ,async (req, res) => {
  try {
    const cart = await Cart.findOne({userId: req.params.userId});
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL 

router.get("/", veriftyTokenAndAdmin, async (req,res)=>{
  try{
    const carts = await Car.find();
    res.status(200).json(carts);
  }catch(err){
    res.status(500).json(err);
  }
})


module.exports = router;