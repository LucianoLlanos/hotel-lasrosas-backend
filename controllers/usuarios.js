const { response, request, query} = require ('express');
const usuario = require('../models/usuario');
let bcrypt = require ('bcryptjs')

const usuariosGet = async( req=request, res=response) => {const datos= req=query;
const query = {estado: true}
const [total, usuarios] = await Promise.all([usuario.countDocuments(query), usuario.find (query)])
res.json({
    mensaje: "usuarios obtenidos",
    total,
    usuarios
})
}
//recibir el cuerpo de la peticion 
const usuarioPost = async(
    req=request, res=response) => {
        const datos = require.body;
        const {name, mail, password, rol} = datos;
        const usuario = new usuario ({name, mail, password, rol});

         //encriptar la contraseña 
         const salt = bcrypt.genSaltSync (10);
         const hash = bcrypt.hashSync (password, salt);
         usuario.password = hash;



        //guardar los datos en la BD
        await usuario.save();

        res.json({
        usuario,
        mensaje: "usuario creado correctamente",
    })
    }


    const usuarioPut = async (req=request, res=response) => {
        const {id} = req.params

        // obtener los datos para actualizar 

        const {mail, password, ...resto} = req.body;

       //si cambia el password, debo cifrarlo o encriptarlo 
       if (password){
        const salt = bcrypt.genSaltSync (10);
         const hash = bcrypt.hashSync (password, salt);
         usuario.password = hash;
       }

        resto.mail = mail
     

        //buscar el usuario y actualizarlo 

        const usuario = await usuario.findByIdAndUpdate(Id, resto, {new: true})

        res.json ({
            mensaje: "usuario actualizado",
            usuario
        })

    }
     const usuarioDelete = async(req= require, res=response) =>{
        const {id} = req.params;
     

     //para cambiar el estado a false
     
     const usuario = await usuario.findById(id);

     if (!usuario.estado){
        return res.json ({
            mensaje: "el usuario no existe"
        })
    }  
        const usuarioInactivado = await usuario.findByIdAndUpdate(id, {estado: false}, {new: true})
        res.json({
            mensaje: "usuario eliminado",
            usuarioInactivado
        })
     
    }
    module.exports ={
        usuariosGet,
        usuarioPost,
        usuarioPut,
        usuarioDelete
    }