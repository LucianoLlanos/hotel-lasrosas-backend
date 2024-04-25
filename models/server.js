const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios'
        this.roomPath = '/api/room'
        this.reservasPath = '/api/reservas'
        this.authPath = '/api/auth'
        this.consultaPath = '/api/consultas'

        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.usuarioPath, require('../routes/usuarios'));
        this.app.use(this.roomPath, require('../routes/room'));
        this.app.use(this.reservasPath, require('../routes/reservas'));
        this.app.use(this.authPath, require('../routes/auth'))
        this.app.use(this.consultaPath, require('../routes/consultas'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server onlineport: ', this.port);

        } )
    }
}

module.exports = Server;