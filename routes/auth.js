const {Ruter} = require ('express')
const {check}= require ('express-validator')
const {validarCampos} = require ()
const {login} = require ('../controllers/auth')

const router = router ();

router.post('/login',
 [
   check('mail', 'el mail no es valido ' ).isEmail(),
   check('password', 'la contraseña es obligatoria').notEmpty(),
   validarCampos
 ],
 login
)