const {Router} = require ('express')
const {check}= require ('express-validator')
const {validarCampos} = require ('../middlewares/validarCampos')
const {login} = require ('../controllers/auth')

const router = Router ();

router.post('/login',
 [
   check('mail', 'el mail no es valido ' ).isEmail(),
   check('password', 'la contraseña es obligatoria').notEmpty(),
   validarCampos
 ],
 login
)

module.exports = router
