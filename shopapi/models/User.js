const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username:{ type: String , required:true, unique:true},
    email: {type: String, requried:true, unique:true},
    password: {type: String , reuired:true},
    fullName: {type: String},
    address: {type: String},
    Phone: {type: String},
    isAdmin: {
      type: Boolean, 
      default: false,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("User",UserSchema);