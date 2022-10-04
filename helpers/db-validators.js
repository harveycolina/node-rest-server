const Role= require('../models/role');
const Usuario= require('../models/usuario');



const esRoleValido=  async(rol='')=>{
    const existeRol= await Role.findOne({rol});
    if (!existeRol) {
           throw new Error(` el rol ${rol} no existe en la base de datos`);
    }
}

const existeEmail=  async(correo='')=>{

    const existeEmail= await Usuario.findOne({correo});
    if (existeEmail) {
           throw new Error(` el correo ${correo} ya existe en la base de datos`);
    }
}
const existeUsuarioPorId=  async(id)=>{

    const existeUsuario= await Usuario.findById({id});
    if (!existeUsuario) {
           throw new Error(` el id no existe ${id} `);
    }
}

    
module.exports= {
    esRoleValido,
    existeEmail,
    existeUsuarioPorId    
}