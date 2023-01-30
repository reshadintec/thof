const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username:{ type: String , required: true, unique:true},
    email: {type: String, requried:true, unique:true},
    password: {type: String , reuired:true},
    isAdmin: { type: Boolean, default: false },
    fullName: {type: String},
    address: {type: String},
    img:{type: String},
    Phone: {type: String},
  },
  {timestamps: true}
);

module.exports = mongoose.model("User",UserSchema);