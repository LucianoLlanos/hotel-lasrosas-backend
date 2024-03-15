const { Router } = require ('express');
const { roomPost, roomsGet, roomPut, roomDelete, roomGet } = require('../controllers/room');


const router = Router();

router.get('/', roomsGet);

router.get('/', roomGet);

router.post('/', roomPost);

router.put('/:id', roomPut);

router.delete('/:id', roomDelete);

module.exports = router;