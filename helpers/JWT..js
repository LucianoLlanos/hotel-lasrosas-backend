const jwt = require('jsonwebtoken');

// Clave secreta para firmar el JWT (debes mantenerla segura)
const SECRET_KEY = 'tu_clave_secreta_aqui';

// Helper para generar JWT para usuarios
const generarJWTUsuario = (usuario) => {
  const payload = {
    id: usuario._id,
    nombre: usuario.nombre,
    correo: usuario.correo,
    rol: usuario.rol
  };

  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: '1h' // Expira en 1 hora
  });
}

// Helper para generar JWT para rooms
const generarJWTRoom = (room) => {
  const payload = {
    id: room._id,
    number: room.number,
    beds: room.beds,
    bathroom: room.bathroom,
    sale: room.sale,
    price: room.price
  };

  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: '1d' 
  });
}