
const mongoose= require('mongoose')

console.log('base de datos en linea');


const dbConnection = async ()=>{
try {
    
    mongoose.connect(process.env.HC_CNN, {
  
        
        
    })
  
} catch (error) {
    console.log(error)
    
    throw new Error('error al iniciar db');
}
}
module.exports={
    dbConnection
}