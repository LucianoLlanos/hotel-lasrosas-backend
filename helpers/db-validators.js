const room = require('../models/room');


const roomNumberExiste = async (number) => {
    const existeRoom = await room.findOne({number})
    if(existeRoom) {
        throw new Error(`La habitacion numero ${number} ya se encuantra en la base de datos`);
    }
}


module.exports = {
    roomNumberExiste,
}