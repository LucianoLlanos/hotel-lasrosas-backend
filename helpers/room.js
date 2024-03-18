// Función para formatear la respuesta de operaciones con habitaciones
const formatRoomResponse = (rooms, message) => {
    return {
      rooms,
      message,
    };
  };
  
  // Función para validar los datos de una habitación
  const validateRoomData = (roomData) => {
    const errors = {};
  
    // Validamos que el número de habitación no esté vacío
    if (!roomData.number) {
      errors.number = 'El número de habitación es obligatorio';
    }
  
    // Validamos que el número de camas no esté vacío y sea un valor numérico
    if (!roomData.beds) {
      errors.beds = 'El número de camas es obligatorio';
    } else if (isNaN(roomData.beds)) {
      errors.beds = 'El número de camas debe ser un valor numérico';
    }
  
    // Validamos que el campo de baño sea un valor booleano
    if (!roomData.bathroom && roomData.bathroom !== false) {
      errors.bathroom = 'El campo de baño es obligatorio';
    }
  
    // Validamos que se hayan proporcionado las tres imágenes de la habitación
    if (!roomData.img1 || !roomData.img2 || !roomData.img3) {
      errors.images = 'Se necesitan tres imágenes de la habitación';
    }
  
    // Validamos que el precio no esté vacío y sea un valor numérico
    if (!roomData.price) {
      errors.price = 'El precio de la habitación es obligatorio';
    } else if (isNaN(roomData.price)) {
      errors.price = 'El precio debe ser un valor numérico';
    }
  
    // Retornamos un objeto con los errores encontrados
    return errors;
  };
  
  // Exportamos las funciones del helper
  module.exports = {
    formatRoomResponse,
    validateRoomData,
  };
  