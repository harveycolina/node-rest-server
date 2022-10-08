
const mongoose= require('mongoose')

console.log('base de datos en linea');

function UserException(message) {
    this.message = message;
    this.name = 'UserException';}
    
const dbConnection = async ()=>{
try {
    
    mongoose.connect(process.env.HC_CNN, {
  
        
        
    })
  
} catch (error) {
    throw new UserException('error', error);
    
    }
}
module.exports={
    dbConnection
}