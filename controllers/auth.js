const {response, request} = require ('express');
const bcrypt = require ('bcryptjs');
const usuario = require ('../models/usuario');
const usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async (req= request, res=response) => {
    const {mail, password} = req.body;

    try {
        const usuario = await usuario.fintOne ({mail});

 //verificar si el correo existe en la BD
 if (!usuario) {
    return res.status(400).json({
        msg: 'correo o password incorrecto'
    })
 }

 //verificar si el usuario esta activo
 if(!usuario.estado){
    return res.status(400).json({
        smg: 'correo o password incorrecto'
    })
 }


 // verificar la contraseña 
 const validPassword = bcrypt.compareSync(password, usuario.password);
 if (!validPassword){
    return res.status(400).json({
        msn: 'correo o password incorrectos'
    })
 }



 // generar el token

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