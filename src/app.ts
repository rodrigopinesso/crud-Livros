import express from 'express' 
import mongoose from 'mongoose'
import {routes} from './routes'

class App {
    public express: express.Application

    constructor () {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    public middleware (){
        this.express.use(express.json())
    }

    public async database (){
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/api');
            console.log ('Conectado com a base de dados')
        } catch (error) {
            console.log ('Erro ao conectar a base de dados')
        }
    }

    public routes (){
        this.express.use(routes)
    }

}

export default new App().express