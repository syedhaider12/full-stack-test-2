import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userScheme = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please Fill The First Name"],
    unique: true,
  },
  lname: {
    type: String,
    required: [true, "Please Fill The Last Name"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please Add Valid Email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minlength: 6,
  },
});
userScheme.pre("save", async function (next) {
  
  this.password = await bcrypt.hash(this.password, 12);  
  console.log("Password hashed")
  next();
});

// sign  jwt and return
userScheme.methods.getSignedJwtToken = function(){
  return jwt.sign({id:this._id}, process.env.SECKEY,{ expiresIn: "30d" });

}
const users = mongoose.model("users", userScheme);
export default users;
