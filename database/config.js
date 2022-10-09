
const mongoose= require('mongoose')

console.log('base de datos en linea');


    
const dbConnection = async ()=>{
try {
    
    mongoose.connect(process.env.HC_CNN, {
  
        
        
    })
  
} catch (error) {
    throw new Error('error', error);
    
    }
}
module.exports={
    dbConnection
}