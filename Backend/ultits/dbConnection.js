import mongoose from "mongoose";

const connectionDb =async()=>{
  try{
    mongoose.connect(process.env.DATABASE_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });
   console.log("Mongo DB Connected");
 }
 catch(err){
   console.log(err);
 }
}
export default connectionDb