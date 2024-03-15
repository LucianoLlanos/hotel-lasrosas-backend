const { Schema, model } = require('mongoose');

const RoomSchema = Schema({
    number: {type: String, requiered:[true, 'El numero es obligatorio'],unique: true},
    beds: {type: Number, requiered:[true, 'El numero de camas es obligatorio']},
    bathroom: {type: Boolean, default: false,},
    img: {type: String, requiered:[true, 'Es necesario poner la ruta de la imagen']},
    img2: {type: String, requiered:[true, 'Es necesario poner la ruta de la imagen']},
    img3: {type: String, requiered:[true, 'Es necesario poner la ruta de la imagen']},
    sale: {type: Boolean, default: false},
    price: {type: Number, requiered:[true,'El precio es necesario']},
    reserved: {type: Boolean, default: false},
});

RoomSchema.method.toJSON = function () {
    const { __v, _id, ...room } = this.toObjet();
    room.uid = _id;
    return room;
}

module.exports = model('Room', RoomSchema)