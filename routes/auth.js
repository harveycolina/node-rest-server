const {Router} = require('express');
const { check } = require('express-validator');

const {validarCampos} = require('../middleware/validar-campos');
const { login } = require('../controller/auth');


const router = Router(); 
router.post('/login', [

    check('correo', 'el correo es obligatorio').isEmail(),
    check('password', 'contraseña obligatoria').not().isEmpty(),
    validarCampos
 
],login );


module.exports=router;
