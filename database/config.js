
const { response } = require('express');
const mongoose= require('mongoose')

console.log('base de datos en linea');


    
const dbConnection = async ()=>{
const conect = mongoose.connect(process.env.HC_CNN)
    if (!conect ){
        return conect,        
   
 response.status("200")
    }    
        
        

}
module.exports={
    dbConnection
}