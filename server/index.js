const express =require('express');
const app=express();
const cors= require('cors')
app.use(cors());
const dotenv= require('dotenv');

dotenv.config({path:'./config.env'})

const PORT=process.env.PORT;
require('./database/db')
require('./Routes/routes')
app.listen(PORT,()=>{
    console.log(`app is listening on port number ${PORT}`);
})