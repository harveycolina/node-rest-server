
const { response } = require('express');
const mongoose= require('mongoose')

console.log('base de datos en linea');


    
const dbConnection = async ()=>{
try {
    
    mongoose.connect(process.env.HC_CNN, {
  
        
        
    })
  
} catch (error) {
    response.json(error).status("400")
    
    next();
    
    }
}
module.exports={
    dbConnection
}