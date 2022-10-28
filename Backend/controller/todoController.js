import Todo from '../models/todo.js'

const getTodo =async(req,res)=>{
  try{
    const task = await Todo.find();
    res.status(200).json({success:true , data:task} );
  }
  catch(err){
     return res.status(400).json({success:false ,error:err} );
  }

};
const todoCompletedList =async(req,res)=>{
  const {isCompleted}=req.query
  try{
    const task = await Todo.find({isCompleted});
    res.status(200).json({success:true , data:task} );
  }
  catch(err){
     return res.status(400).json({success:false ,error:err} );
  }

};
const addTodo=async(req,res)=>{
  try{
     await Todo.create(req.body);
    res.status(200).json({success:true } );
  }
  catch(err){
    return res.status(400).json({success:false ,error:err} );
  }

};
const updateTodo=async(req,res)=>{
  const body=req.body
  try{
    const todo= await Todo.findOneAndUpdate(req.params.id,
     body , {
      new : true
     }
    )
    res.status(200).json({success:true , data:todo} );
  }
  catch(err){
    return res.status(400).json({success:false ,error:err } );
  }

};
const deleteTodo=async(req,res)=>{
  try{
    const todo= await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({success:true , data:todo} );
  }
  catch(err){
    return res.status(400).json({success:false ,error:err } );
  }

};
const getTodoById=async(req,res)=>{
  try{
    const todo= await Todo.findById(req.params.id);
    res.status(200).json({success:true , data:todo} );
  }
  catch(err){
    return res.status(400).json({success:false ,error:err } );
  }

};

export {getTodo,addTodo,updateTodo,deleteTodo,getTodoById,todoCompletedList};