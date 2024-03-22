const { Router } = require ('express');
const { roomPost, roomsGet, roomPut, roomDelete, roomGet } = require('../controllers/room');
const { roomNumberExiste } = require('../helpers/db-validators');
const { check } = require('express-validator');


const router = Router();

router.get('/', roomsGet);

router.get('/:id', roomGet);

router.post('/', [
    check('number').custom(roomNumberExiste),
] ,roomPost);

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('number').custom(roomNumberExiste),
] ,roomPut);
    
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('number').custom(roomNumberExiste),
] ,roomDelete);

module.exports = router;