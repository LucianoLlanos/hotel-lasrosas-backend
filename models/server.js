const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor() {
        thiss.app = express();
        this.port = process.env.PROT;
        this.roomPath = '/api/room'

        //Conectar con base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Funciones para las rutas
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Leer lo q envia el usuario por el cuerpo de la peticion
        this.app.use(express.json());

        //Definir carpeta publica
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.roomPath, requiere('../routes/room'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server onlineport: ', this.port);

        } )
    }
}

module.exports = Server;