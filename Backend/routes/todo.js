import express from "express";
const todo=express.Router();
import authMiddleware from "../middleware/authMiddleware.js";
import {getTodo,addTodo,updateTodo,deleteTodo,getTodoById,todoCompletedList} from '../controller/todoController.js'
todo.route('/').get(authMiddleware,getTodo).post(authMiddleware,addTodo)
todo.route('/id/:id').put(authMiddleware,updateTodo).delete(authMiddleware,deleteTodo)
.get(authMiddleware,getTodoById);
todo.route('/status').get(authMiddleware,todoCompletedList)


export default todo;