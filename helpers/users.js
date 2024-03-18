// Función para formatear la respuesta de operaciones con usuarios
const formatUserResponse = (users, message) => {
    return {
      users,
      message,
    };
  };
  
  // Función para validar los datos de un usuario
  const validateUserData = (userData) => {
    const errors = {};
  
    // Validamos que el nombre no esté vacío
    if (!userData.name) {
      errors.name = 'El nombre es obligatorio';
    }
  
    // Validamos que el correo electrónico no esté vacío y tenga un formato válido
    if (!userData.email) {
      errors.email = 'El correo es obligatorio';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      errors.email = 'El correo electrónico no es válido';
    }
  
    // Validamos que la contraseña no esté vacía
    if (!userData.password) {
      errors.password = 'La contraseña es obligatoria';
    }
  
    // Validamos que el rol no esté vacío
    if (!userData.rol) {
      errors.rol = 'El rol es obligatorio';
    }
  
    // Retornamos un objeto con los errores encontrados
    return errors;
  };
  
  // Exportamos las funciones del helper
  module.exports = {
    formatUserResponse,
    validateUserData,
  };