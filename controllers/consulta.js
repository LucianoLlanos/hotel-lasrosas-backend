const {response, request} = require('express')
const Consulta = require('../models/consulta')

const consultasGet = async(req=request, res=response) => {
    const datos = req.query;
    
    const [ total, consultas ] = await Promise.all([Consulta.countDocuments(query), Consulta.find(query)]);

    res.json({
        mensaje: "Consultas obtenidas",
        total,
        consultas
    })
}

const consultaGet = async(req=request, res=response) => {
    const {id} = req.params;

    const consulta = await Consulta.findById(id);

    res.json({
        mensaje: 'Consulta obtenida',
        consulta,
    })
};

const consultaPost = async(req=request, res=response) => {
    const datos = req.body;
    const {mail, consultaTexto, telefono} = datos;
    const consulta = new Consulta({mail, consultaTexto, telefono});


    await consulta.save();
    res.json({
        mensaje: "Consulta enviada",
        consulta
         
    })
}

const consultaDelete = async(req=request, res=response) => {
    const {id} = reqparams;

    const ConsultaDeleted = await Consulta.findByIdAndDelete(id);

    res.jason({
        mensaje: "Consulta elimindada"
    })
}

module.exports = {
    consultasGet,
    consultaGet,
    consultaPost,
    consultaDelete,
}