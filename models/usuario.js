const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema ({
    name: {type: String, required:[true, 'el nombre es obligatorio']},
    mail:  {type: String, required:[true, 'el correo es obligatorio'], unique: true},
    password:{type: String, required:[true, 'la contraseña es obligatoria']},
    estado: {type: Boolean, default: true },
    rol: {type: String, required: true}
})

// quitar datos extras de la respuesta JSON

UsuarioSchema.methods.toJson = function (){
    const{__v, _id, password, ...usuario} = this.toObjet();
    usuario.uid = _id;
    return usuario;
}

module.exports = model('usuario', UsuarioSchema);