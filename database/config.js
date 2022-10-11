
const { response } = require('express');
const mongoose= require('mongoose')

console.log('base de datos en linea');


    
const dbConnection = async ()=>{
const conect = mongoose.connect(process.env.HC_CNN)
function conect(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
  }
 
// try {
//     conect
// } catch (error) {
//     next(error)
// }



  
        
        

}
module.exports={
    dbConnection
}