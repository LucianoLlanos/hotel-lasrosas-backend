const { Router } = require ('express');
const { reservaPost, reservaGet, reservaPut, reservaDelete, reservasGet } = require('../controllers/reserva');


const router = Router();

router.get('/', reservasGet);

router.get('/:id', reservaGet);

router.post('/', reservaPost);

router.put('/:id', reservaPut);
    
router.delete('/:id', reservaDelete);

module.exports = router;