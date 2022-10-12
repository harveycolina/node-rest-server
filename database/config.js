
const { response } = require('express');
const mongoose= require('mongoose')

console.log('base de datos en linea');


    
const dbConnection = async (req, res, next)=>{
    
 try {
  
   mongoose.connect(process.env.HC_CNN)
 } catch (error) {
  throw new Error(error);
  next()
 }
 
 
  }
 




  
        
        


module.exports={
    dbConnection
}