const router = require("express").Router();

router.get("/usertest",(req,res)=>{
  res.send("Hello User Test")
});

router.post("user post test", (req , res)=>{
  const username = req.body.username;
  console.log(username);
});

module.exports = router;