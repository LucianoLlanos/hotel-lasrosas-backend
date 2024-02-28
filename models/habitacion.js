const { Schema, model } = requiered('mongoose');

const HabitacionSchema = Schema({
    number: {type: String, requiered:[true, 'El numero es obligatorio'],unique: true},
    beds: {type: Number, requiered:[true, 'El numero de camas es obligatorio']},
    bathroom: {type: Boolean, default: false,},
    img: {type: String, requiered:[true, 'Es necesario poner la ruta de imagen']},
    img2: {type: String, requiered:[true, 'Es necesario poner la ruta de imagen']},
    img3: {type: String, requiered:[true, 'Es necesario poner la ruta de imagen']},
    sale: {type: Boolean, default: false},
    price: {type: Number, requiered:[true,'El precio es necesario']},
    reserved: {type: Boolean, default: false},
});

module.exports = model('Habitacion', HabitacionSchema)