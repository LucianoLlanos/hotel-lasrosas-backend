const room = require('../models/room');
const usuario = require ('../models/usuario');
const consulta = require ('../models/consulta')

const mailExiste = async (mail) => {
  const mailExiste = await usuario.findOne ({mail})
  if (mailExiste)
  throw new Error(` ya existe un usuario con el correo ${mail}`)
}


const roomNumberExiste = async (number) => {
    const existeRoom = await room.findOne({number})
    if(existeRoom) {
        throw new Error(`La habitacion numero ${number} ya se encuantra en la base de datos`);
    }
}

const consultaExiste = async (id) => {
    const consultaExiste = await consulta.findById(id);
    if(!consultaExiste) {
        throw new Error(`La consulta con el id ${id} no se encuantra en la base de datos`);
    }
}

module.exports = {
    mailExiste,
    roomNumberExiste,
    consultaExiste,
}