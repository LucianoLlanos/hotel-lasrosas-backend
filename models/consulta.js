const { Schema, model } = require("mongoose");

const ConsultaSchema = Schema ({
    mail:  {type: String, required:[true, 'el correo es obligatorio'], unique: true},
    consulta:{type: String, required:[true, 'la consulta es obligatoria']},
    telefono:{type: Number}
    
})

module.exports = model('usuario', UsuarioSchema);