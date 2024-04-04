const { Router } = require ('express');
const { roomPost, roomsGet, roomPut, roomDelete, roomGet } = require('../controllers/room');
const { roomNumberExiste } = require('../helpers/db-validators');
const { check } = require('express-validator');
const { esAdminRole } = require('../middlewares/validar-roles')
const { validarJWT } = require('../middlewares/validar-jwt')


const router = Router();

router.get('/', roomsGet);

router.get('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
] ,roomGet);

router.post('/', [
    validarJWT,
    esAdminRole,
    check('number').custom(roomNumberExiste),
] ,roomPost);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('number').custom(roomNumberExiste),
] ,roomPut);
    
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un ID valido').isMongoId(),
    check('number').custom(roomNumberExiste),
] ,roomDelete);

module.exports = router;