import express from "express";
import dotenv from 'dotenv';

dotenv.config({path:'./config/config.env'});
import cors from "cors";

import connectionDb from "./ultits/dbConnection.js";
import users from "./routes/users.js";
import todo from "./routes/todo.js";

const app = express();

app.use(express.json());

app.use(cors());
connectionDb();
app.use("/users", users);
app.use("/todo", todo);



const PORT=process.env.PORT  || 5000;



app.listen(PORT,()=>{
  try{
    console.log(`Server is Running  ${process.env.NODE_ENV} mode on port ${PORT}`)
  }
  catch(err){
    console.log(err)
  }
})