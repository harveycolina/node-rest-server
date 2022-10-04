


const validarCampos = require('../middleware/validar-campos');
const validarJwt = require('../middleware/validar-jwt');
const validarRoles = require('../middleware/validar-roles');

module.exports={
    ...validarCampos,
    ...validarJwt,
    ...validarRoles
}