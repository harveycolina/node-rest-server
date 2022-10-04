const{response }= require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const {generarJWT}= require('../helpers/generar-jwt');


const login = async(req, res= response)=>{

const {correo, password}= req.body;


try {
    
const usuario = await Usuario.findOne({correo});
if (!usuario.estado){
    return res.status(400).json({
        msg:'usuario/password no son correctos- estados :false'
    });
}


    const validPassword= bcryptjs.compareSync(password, usuario.password);
    if (!validPassword ) {
       return  res.status(400).json({
            msg:'password no son correctos- password '
    });
    }
//generar web token 
const token = await generarJWT(usuario.id);


    res.json({
        usuario,
        token
    })

} catch (error) {
    console.log(error)
     res.status(500).json({
        msg:'comunicarse con el administrador',
        
    })    
}

    
}


module.exports={
    login
}

