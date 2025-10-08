import express from "express";
import cors from 'cors'

import GetController from './controllers/GetController.mjs'
import PostController from './controllers/PostController.mjs'
import PutController from './controllers/PutController.mjs'
import DeleteController from './controllers/DeleteController.mjs'

import { authInjection } from './guard/auth.mjs';


export default function mapControllers(listen, port){
    const app = express()
    app.use(express.json(), cors())

    const getController = new GetController()
    const postController = new PostController()
    const putController = new PutController()
    const deleteController = new DeleteController()

    app.get('/key/:key', (req, res) => getController.getOne(req, res))
    app.get('/keys', (req, res) => getController.getAll(req, res))
    app.post('/keys', authInjection, (req, res) => postController.create(req, res))
    app.put('/keys/:key', authInjection, (req, res) => putController.update(req, res))
    app.delete('/keys/:key', authInjection, (req, res) => deleteController.remove(req, res))


    if(listen===true){
        app.listen(port) // Port de Redis

    }
}

