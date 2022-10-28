import mongoose, { Types } from "mongoose";

const todoSchema = mongoose.Schema({
  task: {
    type: String,
    required: [true, "Please Enter The Task"],
    unique: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
const Todo = mongoose.model("todo", todoSchema);

export default Todo;
