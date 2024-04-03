const { Router } = require ('express');
const { consultaPost, consultasGet, consultaDelete, consultaGet } = require('../controllers/consulta');
const { check } = require('express-validator');
const { consultaExiste } = require('../helpers/db-validators')


const router = Router();

router.get('/', consultasGet);

router.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
],consultaGet);

router.post('/', [
    check('number').custom(consultaExiste),
] ,consultaPost);
    
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
] ,consultaDelete);

module.exports = router;