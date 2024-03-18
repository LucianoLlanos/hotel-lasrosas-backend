// Importamos bcryptjs para hashear y comparar contraseñas
const bcrypt = require('bcryptjs');

// Función para hashear una contraseña utilizando bcrypt
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

// Función para comparar una contraseña en texto plano con una contraseña hasheada
const comparePasswords = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};

// Exportamos las funciones del helper
module.exports = {
  hashPassword,
  comparePasswords,
};