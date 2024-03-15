const {response, request} = require('express')
const Room = require('../models/room')

const roomsGet = async(req=request, res=response) => {
    const datos = req.query;
    const query = {reserved: false}

    const [ total, rooms ] = await Promise.all([Room.countDocuments(query), Room.find(query)]);

    res.json({
        mensaje: "Habitaciones obtenidas",
        total,
        rooms
    })
}

const roomPost = async(req=request, res=response) => {
    //Recibir el cuerpo de la peticion
    const datos = req.body;
    const { number, beds, bathroom, img1, img2, img3, sale, price } = datos;
    const room = new Room({number, beds, bathroom, img1, img2, img3, sale, price});

    //Guardar los datos en BD
    await usuario.save();

    res.json({
        room,
        mensaje: "Habitacion creada correctamente",
    })
}

const roomGet = async(req=request, res=response) => {
    const {id} = req.params;

    const room = await Room.findById(id);

    res.json({
        msg: 'Habitacion obtenida',
        room,
    })
};

const roomPut = async(req=request, res=response) => {
    const {id} = req.params;

    //Obtener datos para actualizar
    const {number, beds, bathroom, img1, img2, img3, sale, price, reserved, ...resto} = req.body;

    resto.number = number;
    resto.beds = beds;
    resto.bathroom = bathroom;
    resto.img1 = img1;
    resto.img2 = img2;
    resto.img3 = img3;
    resto.sale = sale;
    resto.price = price;
    resto.reserved = reserved;
    
    //Buscar el usuario y actualizarlo
    const room = await Room.findByIdAndUpdate(id, resto,{new: true})

    res.json({
        mensaje: "Habitacion actualizada",
        room
    })
}

const roomDelete = async(req=request, res=response) => {
    const {id} = reqparams;

    //Para eliminar el registro
    const RoomDeleted = await Room.findByIdAndDelete(id);

    res.jason({
        mensaje: "Habitacion eliminada"
    })
}

module.exports = {
    roomsGet,
    roomGet,
    roomPost,
    roomPut,
    roomDelete,
}