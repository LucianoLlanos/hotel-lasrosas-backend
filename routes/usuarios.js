const { Router } = require ('express');


const router = Router();

router.get('/', usuarios.Get);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/:id', usuariosDelete);

module.exports = router;