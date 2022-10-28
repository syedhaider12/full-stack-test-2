import users from "../models/users.js";
import bcrypt from "bcrypt";
const getUser=async(req , res)=>{
  try {
    console.log(req.body)
    const { email, password } = req.body;
    console.log(email)

    if (!email || !password) {
      return res.status(400).json({ error: "Please Fill The Require Field" });
    }
    const user = await users.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: "invalid Credientials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "invalid Credientials" });
    }

    const token = user.getSignedJwtToken();
    res.status(200).json({ succes: true, token: token });
  } catch (err) {
    console.log(err);
  }
};
const addUser=async(req , res)=>{
  console.log(req.body)
  const {fname ,lname ,email ,password}=req.body
  if (!fname || !lname ||!email || !password) {
    return res.status(400).json({ error: "please Fill the Missing Field" });
  } else {
    try {
      const userExit = await users.findOne({ email: email });
      if (userExit) {
        return res.status(400).json({ error: " Email Already Exist" });
      } else {
        await users.create({fname , lname ,email ,password});

        return res.status(201).json({ succes: true });
      }
    } catch (err) {
      res.status(400).json({ succes: false });
    }
  }
};
const updateUser=async(req , res)=>{
  res.status(200).json({success:true});
};
const deleteUser=async(req , res)=>{
  res.status(200).json({success:true});
};
export {getUser,addUser,updateUser,deleteUser};