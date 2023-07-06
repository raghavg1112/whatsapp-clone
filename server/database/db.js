const mongoose= require('mongoose');
const DATABASE=process.env.DATABASE
mongoose.connect(DATABASE,{UseUnifiedTopology:true}).then(()=> {
console.log(`Connection successfully established to database`)
    
}).catch ((err)=>{
    console.log(`error is ${err}`)
})