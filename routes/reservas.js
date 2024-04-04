const { Router } = require ('express');
const { reservaPost, reservaGet, reservaPut, reservaDelete, reservasGet } = require('../controllers/reservas');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');


const router = Router();

router.get('/', [
    validarJWT,
] ,reservasGet);

router.get('/:id', [
    validarJWT,
    check('id', 'El id no es valido').isMongoId(),
] ,reservaGet);

router.post('/', [
    validarJWT,
] ,reservaPost);

router.put('/:id', [
    validarJWT,
    check('id', 'El id no es valido').isMongoId(),
] ,reservaPut);
    
router.delete('/:id', [
    validarJWT,
    check('id', 'El id no es valido').isMongoId(),
] ,reservaDelete);

module.exports = router;