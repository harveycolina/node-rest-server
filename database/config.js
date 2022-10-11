
const { response } = require('express');
const mongoose= require('mongoose')

console.log('base de datos en linea');


    
const dbConnection = async (err, req, res, next)=>{
const conect = mongoose.connect(process.env.HC_CNN)

    if (res.conect) {
        conect
      return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
  }
 




  
        
        


module.exports={
    dbConnection
}