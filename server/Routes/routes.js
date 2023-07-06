const express =require('express');

const { add_user,get_user } =require( '../controller/user_controller');




const route = express.Router();

route.post('/addUser', add_user);
route.get('/getUser', get_user);