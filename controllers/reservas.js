const { response, request } = require('express')
const Reservas = require('../models/reservas')


const reservasGet = async(res=response) => {

    const [ total, reservas ] = await Promise.all([Reservas.countDocuments(query), Reservas.find(query)]);

    res.json({
        mensaje: 'Reservas obtenidas',
        total,
        reservas
    })
}

const reservaGet = async(req=request, res=response) => {
    const {id} = req.params;

    const reserva = await Reservas.findById(id);

    res.json({
        msg: 'Reservacion obtenida',
        reserva,
    })
};

const reservaPut = async(req=request, res=response) => {
    const {id} = req.params;

    const {number, checkin, checkout, user, room, ...resto} = req.body;

    resto.number = number;
    resto.checkin = checkin;
    resto.checkout = checkout;
    resto.user = user;
    resto.room = room;
    
    const reserva = await Reservas.findByIdAndUpdate(id, resto,{new: true})

    res.json({
        mensaje: "Reservaciom actualizada",
        reserva
    })
}

const reservaPost = async(req=request, res=response) => {
    const datos = req.body;
    const { number, checkin, checkout, user, room} = datos;
    const reserva = new Reservas({number, checkin, checkout, user, room});

    await reserva.save();

    res.json({
        reserva,
        mensaje: "Reservacion creada correctamente",
    })
}

const reservaDelete = async(req=request, res=response) => {
    const {id} = reqparams;

    const ReservaDeleted = await Reservas.findByIdAndDelete(id);

    res.jason({
        mensaje: "Reservacion eliminada"
    })
}


module.exports = {
    reservasGet,
    reservaGet,
    reservaPut,
    reservaPost,
    reservaDelete
}