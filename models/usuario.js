const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema ({
    name: {type: String, required:[true, 'el nombre es obligatorio']},
    mail:  {type: String, required:[true, 'el correo es obligatorio'], unique: true},
    password:{type: String, required:[true, 'la contraseña es obligatoria']},
    estado: {type: Boolean, default: true },
    rol: {type: String, required: true}
})

module.exports = model('usuario', UsuarioSchema);