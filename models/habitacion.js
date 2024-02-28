const { Schema, model } = requiered('mongoose');

const HabitacionSchema = Schema({
    numero: {type: String, requiered:[true, 'El numero es obligatorio'],unique: true},
    camas: {type: Number, requiered:[true, 'El numero de camas es obligatorio']},
    baño: {type: Boolean, default: false,},
    img: {type: String},
    oferta: {type: Boolean, default: false},
    precio: {type: Number, requiered:[true,'El precio es necesario']},
    reservado: {type: Boolean, default: false},
});

module.exports = model('Habitacion', HabitacionSchema)