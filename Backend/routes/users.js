import express from "express";
const users=express.Router();
import {getUser ,addUser, updateUser, deleteUser} from '../controller/userController.js'

users.route('/').post(getUser)
users.route('/add').post(addUser)
//users.route('/id/:id').put(updateUser).delete(deleteUser);

export default users;