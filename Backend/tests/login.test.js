import request from 'supertest';
import app from "../app";
import users from "../models/users.js";

const user={
  fname:'haider',
      lname:'shayyyh',
      email:'tet@gmail.com',
      password:'21232323'
}
beforeEach(async()=>{
  await users.deleteMany({});
  await users(user).save();
})
afterEach(()=>{
  console.log('afterEach')
})

test('Should Signup user',async()=>{
  await request(app).post('/users/add').send({
      fname:'haider',
      lname:'shayyyh',
      email:'tet@gmail.com',
      password:'HelloWorld1'
  })
 
  
})
test('Should login user',async()=>{
  await request(app).post('/users').send({
      email:user.email,
      password:user.password
  }).expect(200)
 
})
test('Should not login nonexistant User', async()=>{
  await request(app).post('/users').send({
      email: user.email,
      password: '567abcd'
  }).expect(400)
})
