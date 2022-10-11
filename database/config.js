
const { response } = require('express');
const mongoose= require('mongoose')

console.log('base de datos en linea');


    
const dbConnection = async (err, req, res, next)=>{
    
    if (mongoose.connect(process.env.HC_CNN)) {
        
        mongoose.connect(process.env.HC_CNN)
      return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
  }
 




  
        
        


module.exports={
    dbConnection
}