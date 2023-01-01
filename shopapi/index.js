const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require ("dotenv");
const userRoute = require("./routes/user")
dotenv.config();

mongoose
  .connect( process.env.MONGO_URL)
  .then(()=>console.log("DB Connection Succefull"))
  .catch((err)=>
    {console.log(err)
    });

app.use("/api/users",userRoute);

app.listen(process.env.PORT || 5000, ()=>{
  console.log("Server Started Running at:" + process.env.PORT);
});
