const {response, request} = require ('express');
const bcrypt = require ('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async (req= request, res=response) => {
    const {mail, password} = req.body;

    try {
        const usuario = await Usuario.findOne ({mail});

 if (!usuario) {
    return res.status(400).json({
        msg: 'correo o password incorrecto'
    })
 }

 if(!usuario.estado){
    return res.status(400).json({
        smg: 'correo o password incorrecto'
    })
 }


 const validPassword = bcrypt.compareSync(password, usuario.password);
 if (!validPassword){
    return res.status(400).json({
        msn: 'correo o password incorrectos'
    })
 }




 const token = await generarJWT (usuario.id);

res.json({
    msg: 'login exitoso',
    usuario,
    token,
})


    } catch (error){
        console.log(error)
        return res.status(500).json({
         msg: 'comuniquese con el administrador del sistema'
        })
    }
}


module.exports = {
    login,
}