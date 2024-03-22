const { Router } = require ('express');
const { check } = require ('express-validator');
const { usuariosGet, usuarioPost, usuarioPut, usuarioDelete} = require ('../controllers/usuarios');
const {mailExiste}= require ('../helpers/db-validators')


const router = Router();

router.get('/', usuariosGet);

router.post('/', 
 [
  check  ('name', "el nombre es obligatorio").notEmpty(),
  check('password', "la contraseña debe tener un minimo de 6 caracteres").isLength({min: 6}),
  check('mail',).custom (mailExiste),
  validarCampos
 ],
usuarioPost);

 router.put('/:id',
 [
   check('id', "no es in id valido").isMongoId(),
   check('id').custom(),
   validarCampos
 ],
 usuarioPut); 

 router.delete('/:id',
 [
    check('id', "no es in id valido").isMongoId(),
    check('id').custom(),
    validarCampos
  ], 
 usuarioDelete);

module.exports = router;