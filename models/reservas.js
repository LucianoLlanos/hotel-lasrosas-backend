const { Schema, model } = require('mongoose');

const ReservasSchema = Schema ({
    number: {type: Number, required:[true, 'el numero de reserva es obligatorio']},
    checkin: {type: Date, required:[true, 'La fecha de inicio de la reserva es obligatoria']},
    checkout: {type: Date, required:[true, 'La fecha de salida de la reserva es obligatoria']},
    user: {type: Schema.Types.ObjectId, ref: 'usuario', required: true},
    room: {type: Schema.Types.ObjectId, ref: 'Room', required: true},
});

ReservasSchema.method.toJSON = function () {
    const { __v, _id, ...reserva } = this.toObjet();
    reserva.uid = _id;
    return reserva;
};

module.exports = model('Reserva', ReservasSchema);